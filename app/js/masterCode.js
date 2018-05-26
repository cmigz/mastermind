let masterCode = [];
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

function masterGenerator() {
  masterCode = [];
  let i = 0;
  while(i < 4) {
    masterCode.push(colors[Math.floor(Math.random() * 6 + 0)]);
    i += 1;
  }
}

export default masterGenerator;
