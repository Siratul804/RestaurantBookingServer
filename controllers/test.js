const schedule = require("node-schedule");
const date = new Date(2024, 6, 2, 11, 50, 0);

schedule.scheduleJob(date, function () {
  console.log("The world is going to end today.");
});

exports.test = (req, res) => {
  res.send("test success");
  console.log("Yo !!! Test !!!");
};

// const job = schedule.scheduleJob("*/2 * * * * *", () => {
//   console.log("Done job @ " + new Date().toString());
//   job.cancel();
// });
