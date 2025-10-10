import { api, normalizeApiError } from "@/utils/api";

export const memberService = {
  signup: async (email: string, pass: string) => {
    try {
      const res = await api.post("/members", {
        email,
        password: pass,
      });
      return res;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },
};
