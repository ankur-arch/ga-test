import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 250,
  duration: "1s",
};

export default function () {
  http.get("https://ga-test-two.vercel.app/api");
  sleep(0.01);
}
