
var captcha = require('./index.js')
var expect = require('chai').expect;
require('mocha-generators').install();

describe('create a new captcha', function() {

    it('custom text captcha', function*() {

        var item = yield captcha({
            text:'ABCD'
        });

        expect(item.answer).to.be.equal('ABCD');
    });

    it('custom length captcha', function*() {
        var item = yield captcha({
            length: 6
        });
        expect(item.answer.length).to.be.equal(6);
    });

    it('a normal captcha', function*() {
        var item = yield captcha({
            type: 'normal'
        });
        expect(/^[A-Za-z\d]+$/.test(item.text) ).to.be.equal(true);
        expect(item.text).to.be.equal(item.answer);
    });

    it('a digital captcha', function*() {
        var item = yield captcha({
            type: 'number'
        });

        expect(/^\d+$/.test(item.text)).to.be.equal(true);
        expect(item.text).to.be.equal(item.answer);
    });

    it('a letter captcha', function*() {
        var item = yield captcha({
            type: 'letter'
        });

        expect(/^[A-Za-z]+$/.test(item.text) ).to.be.equal(true);
        expect(item.text).to.be.equal(item.answer);
    });

    it('a arithmetic captcha', function*() {
        var item = yield captcha({
            type: 'arithmetic'
        });
        expect(item.text).to.be.not.equal(item.answer);
        expect(item.text).to.be.a('array');
    });
});