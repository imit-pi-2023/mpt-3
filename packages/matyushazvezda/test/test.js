const assert = require('chai').assert;
const { calculateDaysUntilNewYear } = require('../app'); 

describe('calculateDaysUntilNewYear', function () {
    it('должна возвращать положительное число дней до Нового года', function () {
        const result = calculateDaysUntilNewYear();
        assert.isNumber(result);
        assert.isAbove(result, 0);
      });

      it('должна возвращать 0, если сегодня уже Новый год', function () {
        const currentDate = new Date('2023-12-31'); 
        const result = calculateDaysUntilNewYear(currentDate);
        assert.equal(result, 0);
      });
});
