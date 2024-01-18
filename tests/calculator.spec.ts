import { divide, multiply, subtract, sum } from "../src/calculator";
var assert = require('assert');

describe('Calculator tests', function() {
    it('2 + 2 should return 4', function() {
        assert.equal(sum(2, 2), 4);
    });
    it('2 - 2 should return 0', function() {
        assert.equal(subtract(2, 2), 0);
    });
    it('2 * 2 should return 4', function() {
        assert.equal(multiply(2, 2), 4);
    });
    it('2 / 2 should return 1', function() {
        assert.equal(divide(2, 2), 1);
    });
})
