import { api, normalizeApiError } from "@/utils/api";

export const memberService = {
  signup: async (email: string, pass: string) => {
    try {
      const response = await api.post("/members", {
        email,
        password: pass,
      });
      return response;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },
};
