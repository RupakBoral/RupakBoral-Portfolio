require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_BASE_URL, process.env.DEPLOYED_URL],
    credentials: true,
    methods: "GET,POST",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const EmailRouter = require("./email");

app.use("/", EmailRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
