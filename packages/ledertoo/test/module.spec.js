import { last_time } from "../method.js";
import { dayz, today } from "../index.js";
import { expect } from "chai";

describe("Example testing of module `module`", () => {
  it("should export day 2023.01.01 equal to 364", () => {
    expect(last_time(dayz)).to.be.equal(364);
  });

  describe("function last_time", () => {
    it("should return 95, when  last_time(today) called", () => {
      expect(last_time(today)).to.be.equal(95);
    });
  });
});
