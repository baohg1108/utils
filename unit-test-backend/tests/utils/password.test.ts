import { hashPassword, verifyPassword } from "~/utils/password";

describe("hashpassword", () => {
  it("should return password hash", async () => {
    const hash = await hashPassword("p@ssw0rd!");

    // check hash different vs plain password
    expect(hash).not.toBe("p@ssw0rd!");

    // check start with $2b$, $2a$ (bcrypt hash prefix)
    expect(hash).toMatch(/^\$2[aby]\$/);
  });

  it("should verify correct password", async () => {
    // create hash
    const hash = await hashPassword("p@ssw0rd!");

    // check verify
    const isValid = await verifyPassword("p@ssw0rd!", hash);

    expect(isValid).toBe(true);
  });
});
