const mysql = require('mysql');

let db = mysql.createConnection({
  host: '192.168.146.144',
  user: 'root',
  password: '123456',
  database: 'riji',
  port: 3306
});

db.connect(function (err) {
  if (err) {
      console.log("err" + err.stack);
      return;
  }
  console.log("connection id " + db.threadId);
});

module.exports = db;