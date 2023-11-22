import { _axios } from "@/services/axios";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type Data = any;
type Token = string | undefined | boolean;

export async function callApi(
  method: Method,
  url: string,
  depth = 1,
  data: Data = {},
  token: Token = undefined
) {
  try {
    const response = await _axios(method, url, data, token);
    if (depth === 1) {
      return response.data;
    }
    if (depth === 2) {
      return response.data.data;
    }
  } catch (e) {
    console.log(e);
    return { error: e.message };
  }
}
