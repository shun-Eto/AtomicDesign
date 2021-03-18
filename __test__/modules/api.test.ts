import api from "@src/assets/modules/api";

describe("Checkt Client API Methods", () => {
  test("method", async () => {
    const response = await api.test();
    expect(response).toMatchObject({ success: true });
  });

  test("signin method", async () => {
    const response = await api.signin();
    expect(response).toMatchObject({ success: true });
  });
});
