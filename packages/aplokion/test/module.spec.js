import { new_year } from "../method.js";
import { expect } from "chai";

describe("Example testing of module `method`", () => {
  it("new_year(new Date(2023,12,29)) should be equal to 66 дней", () => {
    expect(new_year(new Date(2023, 9, 27))).to.be.equal(`66 дней`);
  });
});
