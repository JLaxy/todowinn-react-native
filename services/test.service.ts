import { api, normalizeApiError } from "@/utils/api";

export const testService = {
  test_ping: async () => {
    try {
      return (await api.get("/public-test")).data;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },
  private_test_ping: async () => {
    try {
      return (await api.get("/protected-test")).data;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },
};
