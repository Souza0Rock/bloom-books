import axios from "axios";

export const nyTimesInstance = axios.create({
  baseURL: "https://api.nytimes.com/svc/",
  params: {
    "api-key": "Sd3Scmz7lLmxJU8aObe2oie9KSfbnyBB",
  },
});
