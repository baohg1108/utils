import { ObjectId } from "mongodb";
import { objectIdToString } from "../../src/utils/objectIdToString";

describe("objectId ToString", () => {
  // it()
  test("Should return correct 24-chars hex string from MongoDB Object Id: ", () => {
    const rawId = new ObjectId();
    const convertedId = objectIdToString(rawId);
    // alway return correct 24-chars
    expect(convertedId).toBe(rawId.toHexString());

    // right have 24-chars
    expect(convertedId).toHaveLength(24);

    // right is hex string
    expect(convertedId).toMatch(/^[a-f0-9]{24}$/);
  });
});
