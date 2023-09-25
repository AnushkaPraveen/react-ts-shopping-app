import axios from "axios";

type Request={
    method:string;
    url:string;
    data?:any;
}

export const apiRequest = async ({method, url, data = null}:Request) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};