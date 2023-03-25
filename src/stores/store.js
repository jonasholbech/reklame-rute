import { writable } from "./storagestore";
import data from "../assets/streets.json";
console.log(data);
export const streets = writable(
  "reklamerute",
  data.map((e) => ({ street: e, completed: false }))
);
