import { fullyear, for_test } from "../method.js";
import { expect } from "chai";

describe("Testing the fullyear function", () => {
    it("should return 365 days for a date one day before the next New Year", () => {
      const currentDate = new Date();
      const nextYear = currentDate.getFullYear() + 1;
      const targetDate = new Date(nextYear, 0, 1);
      const expectedDays = Math.ceil((targetDate - currentDate) / (1000 * 60 * 60 * 24));

      const result = fullyear();

      expect(result).to.equal(expectedDays);
    });
  
    it("should return Arbuz", () => {
    expect("Arbuz").to.equal(for_test);
    });   
});