import fs from "fs";

const data = fs.readFileSync("input.txt", "utf8");
// const data = fs.readFileSync("input.test.txt", "utf8");
const lines = data.split("\n");

const left = [];
const right = [];

lines.forEach((line) => {
  const [l, r] = line.split('   ');
  left.push(Number.parseInt(l, 10));
  right.push(Number.parseInt(r, 10));
});

let sum = 0;
left.forEach((l) => {
  const count = right.filter((r) => r === l).length;
  sum += count * l;
});

console.log(sum);
