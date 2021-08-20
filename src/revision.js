function type(cb) {
  console.log("doing some work...");
  return cb();
}

var green = new Promise(function resolver(resolve, reject) {
  console.log("doing some work...");
  resolve();
});
// green.then(function () {
//   console.log("promise back");
// });
async function main() {
  type(function red() {
    console.log("call back");
  });
  //   green.then(function () {
  //     console.log("promise back");
  //   });
  await green;
  console.log("promise back");
}
main();
