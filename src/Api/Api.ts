// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { endPoint } from "./endPoint";

export default axios.create({
  baseURL: endPoint,
  headers: {
    "Content-Type": "application/json",
  },
});
