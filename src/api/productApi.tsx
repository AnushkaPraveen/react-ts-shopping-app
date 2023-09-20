import { apiRequest } from "./http-wrapper";

const baseUrl = "https://dummyjson.com/products/categories";

export const GetAllProducts = async () => {
    const url = baseUrl;
    //return apiRequest("get", url);
  };