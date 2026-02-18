const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST - Save Message
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(400).json({
      errors: error.errors
        ? Object.values(error.errors).map(err => err.message)
        : ["Something went wrong"],
    });
  }
});


module.exports = router;
