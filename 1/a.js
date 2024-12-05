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

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < left.length; i++) {
  sum += Math.abs(left[i] - right[i]);
}

console.log(sum);
