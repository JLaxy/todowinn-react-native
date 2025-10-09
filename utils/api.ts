import axios, { AxiosError, isAxiosError } from "axios";

export type ApiError = {
  statusCode: number;
  error: string;
  message: string;
};

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  withCredentials: true,
});

// Normalize error to make it more readable at frontend
export const normalizeApiError = (error: unknown): ApiError => {
  if (isAxiosError(error)) {
    const err = error as AxiosError<{
      response: { error: string; message: string; statusCode: number };
    }>;

    console.log(err.response?.data);

    return {
      statusCode: err.response?.status || 500,
      error: err.response?.data?.response.error || "Server Error",
      message:
        err.response?.data?.response.message || "Unexpected server error",
    };
  }

  return {
    statusCode: 500,
    error: "Server Error",
    message: "Unknown error occurred",
  };
};
