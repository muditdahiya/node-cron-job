// Require modules
var cron = require("node-cron");
var mysql = require("mysql");

// Connect to database
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
});

// Schedule a daily task
cron.schedule("0 0 9 * * *", () => {
  // This block will run daily at 9:00AM

  // Create the SQL Query
  const sqlQuery = "";

  con.query(sqlQuery, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
