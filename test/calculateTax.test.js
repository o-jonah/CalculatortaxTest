import { expect } from 'chai';
import calculateTax from '../calculateTax.js';

describe('Tax Calculator', function() {
  it('should return 0 tax for earnings below 12,000', function() {
    expect(calculateTax(11000)).to.equal(0);
  });

  it('should return 20% tax for earnings between 12,000 and 36,000', function() {
    expect(calculateTax(20000)).to.equal(1600); // 20% of (20000 - 12000)
  });

  it('should return 40% tax for earnings above 36,000', function() {
    expect(calculateTax(50000)).to.equal(10400); // 20% of (36000 - 12000) + 40% of (50000 - 36000)
  });
});