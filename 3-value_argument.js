const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (arg1 === undefined) {
  console.log("No argument");
} else if (arg2 === undefined) {
  console.log(`one argument "${arg1}"`);
} else {
  console.log(`2 arguments: "${arg1} ${arg2}"`);
}
