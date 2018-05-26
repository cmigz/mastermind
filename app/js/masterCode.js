const masterCode = [];
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

function masterGenerator() {
  masterCode.length = 0;
  let i = 0;
  while (i < 4) {
    masterCode.push(colors[Math.floor(Math.random() * 6 + 0)]);
    i += 1;
  }
}

export { masterCode, colors, masterGenerator };
