import { hashPassword, verifyPassword } from "~/utils/password";

describe("password utils", () => {
  // test case: check hash password
  test("password should return hash string password", async () => {
    // create pass for test
    const hash = await hashPassword("12345678abcEFG");

    // check hash always different hashed
    expect(hash).not.toBe("12345678abcEFG");

    // check always start equals $2a$, $2b$ or $2y$
    // expect(
    //   hash.startsWith("$2a$") ||
    //     hash.startsWith("$2b$") ||
    //     hash.startsWith("$2y$"),
    // ).toBe(true);
    expect(hash).toMatch(/^\$2[aby]\$/);
  });

  // test case: check verify password correct
  test("verifyPassword should return true for correct password", async () => {
    const hash = await hashPassword("12345678abcEFG");
    const isValid = await verifyPassword("12345678abcEFG", hash);
    expect(isValid).toBe(true);
  });

  // test case: check verify password incorrect
  test("verifyPassword should return true for wrong password", async () => {
    const hash = await hashPassword("12345678abcEFG");
    const isValid = await verifyPassword("wrong_password", hash);
    expect(isValid).toBe(false);
  });
});
