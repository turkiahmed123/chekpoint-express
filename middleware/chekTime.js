const moment = require("moment");
const beginTime = moment("9:00 am", "HH:mm a");
const endTime = moment("17:00 pm", "HH:mm a");
const startingDay = 1;
const endingDay = 5;
console.log(moment);
const checkTime = (req, res, next) => {
  let currentTime = moment();
  let currentDay = moment().day();
  if (
    currentTime.isBetween(beginTime, endTime) &&
    currentDay >= startingDay &&
    currentDay <= endingDay
  ) {
    next();
  } else {
    console.log("it's not the time to connect !!");
    res.status(404).send("we are closed check another time !!");
  }
};
module.exports = checkTime;