import { daysUntilNewYear } from "../method.js";
import { expect } from "chai";

describe("Example testing of module `method`", () => {
    it("new_year(new Date(2024,0,1)) should be equal to 94", () => {
        expect(daysUntilNewYear(new Date())).to.be.equal(94);
    });
});
