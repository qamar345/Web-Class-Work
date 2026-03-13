const express = require("express");
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const { createDatabaseConnection } = require("./config/db");
const userRouter = require("./routes/user.route");
require("dotenv").config();

const app = express();
app.use(express.json());

createDatabaseConnection();

app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port: ${process.env.PORT} `);
});
