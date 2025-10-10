import { api, normalizeApiError } from "@/utils/api";

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      return res;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },
  logout: async () => {
    try {
      const res = await api.post("/auth/logout");
      return res;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },
};
