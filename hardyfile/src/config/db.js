import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connectionParams = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
};

const db = mysql.createConnection(connectionParams);

db.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

export default db;