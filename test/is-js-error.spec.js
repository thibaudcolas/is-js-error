import { describe, it } from 'mocha';
import { expect } from 'chai';
import isJSError from '../lib/is-js-error';


describe('Is JS error?', () => {
    beforeEach('tweak timeout', function tweakTimeout() {

    });

    it('should export a function', () => {
        expect(isJSError).to.exist;
        expect(isJSError).to.be.a('function');
    });

    it('should report on ', function(done) {
        this.timeout(5000);
        isJSError('https://thib.me', (err, result) => {
            if (err) return console.log(err);

            console.log(result);
            expect(result.indexOf('https')).to.equal(0);
            done();
        });
    });
});
