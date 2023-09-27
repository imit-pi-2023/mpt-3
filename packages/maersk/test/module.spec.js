import { getDaysUntilNewYear, for_test } from "../method.js";

import { expect } from "chai";

describe("Testing the fullyear function", () => {
  it("should return 365 days for a date one day before the next New Year", () => {
    let currentDate = new Date();

    let currentYear = currentDate.getFullYear();
    let newYear = new Date(currentYear + 1, 0, 1);

    let expectedDays = Math.ceil(
      (newYear - currentYear) / (1000 * 60 * 60 * 24)
    );

    // let result = getDaysUntilNewYear();

    // expect(result).to.equal(expectedDays);
  });

  it("should return Arbuz", () => {
    expect("Arbuz").to.equal(for_test);
  });
});
