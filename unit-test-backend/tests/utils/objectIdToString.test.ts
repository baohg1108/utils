import { ObjectId } from "mongodb";
import { objectIdToString } from "../../src/utils/objectIdToString";

describe("objectIdToString", () => {
  it("should convert ObjectId to string", () => {
    const rawId = new ObjectId();
    const convertedId = objectIdToString(rawId);

    expect(convertedId).toBe(rawId.toHexString());
    expect(convertedId).toHaveLength(24);
    expect(convertedId).toMatch(/^[a-f0-9]{24}$/);
  });
});
