var Diag = require('./diagsum.js');
var expect = require('chai').expect;

describe('Diag', function() {

    it('adds diagonals', function() {
        var expected = 15;
        expect(Diag.run([
          [ 1, 2, 3 ],
          [ 4, 5, 6 ],
          [ 7, 8, 9 ],
        ])).to.equal(expected);
    });

    it('adds reverse diagonals', function() {
        var expected = 15;
        expect(Diag.getReverse([
          [ 1, 2, 3 ],
          [ 4, 5, 6 ],
          [ 7, 8, 9 ],
        ])).to.equal(expected);
    });

    it('adds reverse diagonals', function() {
        var expected = 21;
        expect(Diag.getReverse([
          [ 1, 2, 10 ],
          [ 4, 5, 6 ],
          [ 6, 8, 9 ],
        ])).to.equal(expected);
    });
});
