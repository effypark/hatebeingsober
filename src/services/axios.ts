import axios from "axios";

interface Axios {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body: {
    status?: number;
    message?: string;
    data?: any;
    errorCode?: string;
    json?: any;
  };
}

export const _axios = async (
  method: Axios["method"],
  url: string,
  body?: unknown,
  token?: string | boolean
): Promise<Axios["body"]> => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });

  switch (method) {
    case "GET":
      return await axiosInstance.get(url);
    case "POST":
      return await axiosInstance.post(url, body ?? {});
    case "DELETE":
      return await axiosInstance.delete(url);
    case "PATCH":
      return await axiosInstance.patch(url, body ?? {});
    case "PUT":
      return await axiosInstance.put(url, body ?? {});
    default:
      throw new Error("_aixos() method error");
  }
};
