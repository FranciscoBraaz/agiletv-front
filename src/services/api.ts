import axios from "axios";

const BASE_URL = "https://agile-releases.s3.us-east-1.amazonaws.com/tests";

export const api = axios.create({
  baseURL: BASE_URL,
});
