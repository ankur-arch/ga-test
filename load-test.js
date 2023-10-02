import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 300,
  duration: "5s",
};

export default function () {
  http.get("https://ga-test-two.vercel.app/api");
  sleep(0.01);
}
