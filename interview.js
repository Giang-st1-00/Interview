const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("", function (input) {
  processString(input.trim());
  rl.close();
});

function processString(str) {
  if (!/^[a-zA-Z]+$/.test(str)) {
    console.log("Invalid input");
    return;
  }

  const lower = str.toLowerCase();
  const patterns = new Set(["aw", "aa", "dd", "ee", "oo", "ow"]);
  const result = [];

  let i = 0;

  while (i < str.length) {
    if (i + 1 < str.length) {
      const pairLower = lower[i] + lower[i + 1];
      if (patterns.has(pairLower)) {
        result.push(str[i] + str[i + 1]);
        i += 2;
        continue;
      }
    }

    if (lower[i] === "w") {
      result.push(str[i]);
    }

    i++;
  }

  console.log(`${result.length} (${result.join(", ")})`);
}
