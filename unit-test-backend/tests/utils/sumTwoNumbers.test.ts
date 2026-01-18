import { sumTwoNumbers } from "~/utils/sumTwoNumbers";

describe("sumTwoNumbers", () => {
  it("should return the correct sum of the two numbers", () => {
    const result = sumTwoNumbers(3, 5);
    expect(result).toBe(8);
  });
});
