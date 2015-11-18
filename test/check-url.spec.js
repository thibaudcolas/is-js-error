import 'babel-polyfill';

import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import checkURL from '../lib/check-url';

import createTestServer from './server';

const isCIEnvironment = !!process.env.CI;

describe('Check URL', function testChechkURL() {
    this.timeout(5000);

    let server;

    if (!isCIEnvironment) {
        before('set up test server', () => {
            server = createTestServer(4001);
        });

        after('tear down test server', () => {
            server.close();
        });
    }

    it('should export a function', () => {
        expect(checkURL).to.be.a('function');
    });

    it('should report correctly when there is no JS error', (done) => {
        checkURL('http://localhost:4001/no-error', (err, result) => {
            expect(err).to.equal(null);
            expect(result[1]).to.equal(false);

            done();
        });
    });

    it('should report correctly when there is a JS error', (done) => {
        checkURL('http://localhost:4001/error', (err, result) => {
            expect(err).to.equal(null);
            expect(result[1]).to.equal(true);

            done();
        });
    });
});
