const limit = 15;
let count = 1;
Array(limit)
  .fill(0)
  .reduce((acc, _, index) => {
    const spaces = " ".repeat(Math.abs(limit - count) / 2);
    const stars = "*".repeat(count) + "\n";
    index >= Math.floor(limit / 2) ? (count -= 2) : (count += 2);
    return `${acc}${spaces}${stars}`;
  }, "\n");
