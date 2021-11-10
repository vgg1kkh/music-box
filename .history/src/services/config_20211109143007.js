// const devBASE_URL = "https://music-api-vgg1kkh.vercel.app/";
// const devBASE_URL = "http://123.207.32.32:9001/";
const proBASE_URL = "127.0.0.1";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBASE_URL : proBASE_URL;

export const TIMEOUT = 5000
