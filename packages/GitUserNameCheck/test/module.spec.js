import { getDays , date22, date23} from "../method.js";
import { expect } from "chai";

describe("Example testing of module `method`", () => {
  it("date22 should be equal to 365", () => {
    expect(getDays(date22)).to.be.equal(365);
  });

  it("date23 should be equal to 364", () => {
    expect(getDays(date23)).to.be.equal(364);
  });

});
