// index.js
const cors = require("cors");
const env = require("dotenv");
const express = require("express");
const UserService = require("./services/userService");
const WaitlistService = require("./services/waitlistService");

env.config();

const port = 9000;
const app = express();
const userService = new UserService();
const waitlistService = new WaitlistService();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create users
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const userCreated = await userService.createUser({ name, email });
  return res
    .status(201)
    .json({ message: "user created", data: { userCreated } });
});

app.post("/waitlist", async (req, res) => {
  console.log({ body: req.body });
  const { email } = req.body;
  console.log({ email });
  const waitlistCreated = await waitlistService.createWaitlist({ email });
  return res
    .status(201)
    .json({ message: "Joined waitlist", data: { waitlistCreated } });
});

// Error Middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    data: {
      message: errorMessage,
    },
    stack: process.env.NODE_ENV === "production" ? {} : err.stack,
  });
});

app.listen(port, () => {
  console.log(`Application server listening on port: http://localhost:${port}`);
});
