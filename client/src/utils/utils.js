import { range } from "d3";
export const generateData = (value, length = 5) => {
  return range(length).map((item, index) => ({
    data: index,
    value: 20,
  }));
};
