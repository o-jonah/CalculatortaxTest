import { expect } from 'chai'; 

describe('Tax Calculator', function() {
  it('should return 0 tax for earnings below 12,000', function() {
    expect(calculateTax(11000)).to.equal(0);
  });
});