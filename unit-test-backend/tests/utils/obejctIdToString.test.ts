import { ObjectId } from "mongodb";

import { objectIdToString } from "~/utils/objectIdToString";

describe("objectIdToString", () => {
  it("should be return to hex string when input is ObjectId", () => {
    const rawId = new ObjectId();
    const result = objectIdToString(rawId);

    expect(result).toBe(rawId.toHexString());
    expect(typeof result).toBe("string");
    expect(result.length).toBe(24);
    expect(result).toMatch(/^[0-9a-f]{24}$/);
  });
});
