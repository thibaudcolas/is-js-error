import 'babel-polyfill';

import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import checkURL from '../lib/check-url';

import createTestServer from './server';

describe('Check URL', function testChechkURL() {
    let server;

    this.timeout(5000);

    before('set up test server', () => {
        server = createTestServer(5798);
    });

    after('tear down test server', () => {
        server.close();
    });

    it('should export a function', () => {
        expect(checkURL).to.be.a('function');
    });

    it('should report correctly when there is no JS error', (done) => {
        checkURL('http://localhost:5798/no-error', (err, result) => {
            expect(err).to.equal(null);
            expect(result[1]).to.equal(false);

            done();
        });
    });

    it('should report correctly when there is a JS error', (done) => {
        checkURL('http://localhost:5798/error', (err, result) => {
            expect(err).to.equal(null);
            expect(result[1]).to.equal(true);

            done();
        });
    });
});
