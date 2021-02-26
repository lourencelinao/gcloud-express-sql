const mysql = require("mysql");

let config = {
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
}

if (process.env.NODE_ENV === "production") {
    config.socketPath = `cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
}else{
    config.host = process.env.DB_HOST
}

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log(err.message, 'error poopoo', process.env.INSTANCE_CONNECTION_NAME);
    throw err
  } else {
    console.log("Database mounted, poopoo");
  }
});

module.exports = connection;
