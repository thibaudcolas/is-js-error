import { describe, it } from 'mocha';
import { expect } from 'chai';
import checkURL from '../lib/check-url';


describe('Check URL', function describeCheckURL() {
    this.timeout(5000);

    it('should export a function', () => {
        expect(checkURL).to.exist;
        expect(checkURL).to.be.a('function');
    });

    it('should report on ', (done) => {
        checkURL('https://thib.me', (err, result) => {
            if (err) return console.log(err);

            console.log(result);

            expect(result.indexOf('https')).to.equal(0);
            done();
        });
    });
});
