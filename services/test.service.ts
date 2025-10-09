import { api, normalizeApiError } from "@/utils/api";

export const TestService = {
  test_ping: async () => {
    try {
      return (await api.get("/public-test")).data;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },
};
