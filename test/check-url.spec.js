import 'babel-polyfill';

import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import checkURL from '../lib/check-url';

import createTestServer from './server';

describe('Check URL', function testChechkURL() {
    let server;

    this.timeout(5000);

    before('set up test server', () => {
        server = createTestServer(4001);
    });

    after('tear down test server', () => {
        server.close();
    });

    it('should export a function', () => {
        expect(checkURL).to.be.a('function');
    });

    it('should report correctly when there is no JS error', (done) => {
        checkURL('http://localhost:4001/no-error', 1000, (err, result) => {
            expect(err).to.equal(null);
            expect(result[1]).to.equal(false);

            done();
        });
    });

    it('should report correctly when there is a JS error', (done) => {
        checkURL('http://localhost:4001/error', 1000, (err, result) => {
            expect(err).to.equal(null);
            expect(result[1]).to.equal(true);

            done();
        });
    });

    it('should get an error when the url does not load', (done) => {
        checkURL('http://localhost:9999/notfound', 1000, (err, result) => {
            expect(err).to.not.equal(null);
            expect(typeof result).to.equal('undefined');

            done();
        });
    });
});
