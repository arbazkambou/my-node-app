const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "app";
const HOST_PORT = process.env.HOST_PORT || PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Server!",
    status: "ok",
    app: APP_NAME,
    port: HOST_PORT,
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} running on port ${HOST_PORT}`);
});
