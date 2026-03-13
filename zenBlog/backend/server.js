const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const { connectDB } = require("./config/db");
const { seedAdmin } = require("./seed/admin.seed");
const app = require("./app");
require("dotenv").config();

connectDB().then(() => {
  seedAdmin();
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port: ${process.env.PORT}`);
});
