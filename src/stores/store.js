import { writable } from "./storagestore";
import data from "../assets/streets.json";

export const streets = writable(
  "reklamerute",
  data.map((e) => ({ ...e, completed: false }))
);
