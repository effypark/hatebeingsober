import { callApi } from "@/utils/callApi";
import { API_AUTH_ME } from "@/constants/api";

export const getRandomCocktail = async () => {
  return await callApi("GET", API_AUTH_ME);
};
