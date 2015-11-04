import { describe, it } from 'mocha';
import { expect } from 'chai';
import checkURL from '../lib/check-url';

import testServer from './server';


describe('Check URL', () => {
    it('should export a function', () => {
        expect(checkURL).to.be.a('function');
    });

    it('should report correctly when there is no JS error', (done) => {
        const server = testServer.noErrorTest(4001);

        checkURL('http://localhost:4001/', (err, result) => {
            expect(err).to.equal(null);
            expect(result).to.equal(false);

            done();

            server.close();
        });
    });

    it('should report correctly when there is a JS error', (done) => {
        const server = testServer.errorTest(4002);

        checkURL('http://localhost:4002/', (err, result) => {
            expect(err).to.equal(null);
            expect(result).to.equal(true);

            done();

            server.close();
        });
    });

    it('should get an error when the url does not load', (done) => {
        checkURL('http://localhost:4003/', (err, result) => {
            expect(err).to.equal(null);
            expect(result).to.equal(false);

            done();
        });
    });
});
