const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const EmailRouter = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

EmailRouter.post("/", (req, res) => {
  res.send("hello");
});

EmailRouter.post("/send-email", async (req, res) => {
  const { name, message, fromEmail, phone } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL,
    subject: "Visitor Information Submission",
    text: `This mail has been sent to reach out to you.\nThe details of the recruiter is mentioned below:\nName: ${name}\nEmail: ${fromEmail}\nPhone no: ${phone}\n\Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error sending email", details: error.message });
  }
});

module.exports = EmailRouter;
