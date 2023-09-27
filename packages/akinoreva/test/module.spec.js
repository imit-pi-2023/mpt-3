import { daysBeforeNewYear, date23 } from "../method.js";
import { expect } from "chai";

describe("Example testing of module `method`", () => {
  
  it("date23 should be equal to 365", () => {
    expect(daysBeforeNewYear(date23)).to.be.equal(365);
  });
  
});
