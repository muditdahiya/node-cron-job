// Require modules
var cron = require("node-cron");
var mysql = require("mysql");

// Connect to database
var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "cronjob",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
});

function sendBirthdayReminders() {
  const numbers =
    "select number from members where Day != day(curdate()) and Month != month(curdate())";

  con.query(numbers, function (err, result) {
    if (err) throw err;
    result = JSON.parse(JSON.stringify(result));
    result.forEach((member) => {
      console.log(member.number);
      // Send messages using twilio here
    });
  });
}

sendBirthdayReminders();

// Schedule a daily task
cron.schedule("0 0 9 * * *", () => {
  // This block will run daily at 9:00AM
  sendBirthdayReminders();
});

// Schedule a task for every second
cron.schedule("* * * * * *", () => {
  // This block will run every second
});
