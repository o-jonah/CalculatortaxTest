import { expect } from 'chai';
import calculateTax from '../calculateTax.js'; // Ensure the .js extension is included

describe('Tax Calculator', function() {
  it('should return 0 tax for earnings below 12,000', function() {
    expect(calculateTax(11000)).to.equal(0);
  });
});