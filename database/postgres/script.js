import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  vus: 1400,
  duration: "3m",

};

export default function () {
  let id = Math.floor(Math.random() * 10000000)
  let res = http.get(`http://localhost:3060/api/restaurants/${id}/photos`);
  check(res, {
    "success": (r) => r.status == 200
  });
  sleep(2);
};