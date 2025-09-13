const express = require('express');
const Survey = require('../models/Survey');
const auth = require('../middleware/auth');

const router = express.Router();

// Add survey (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { name, age, location } = req.body;
    const survey = new Survey({
      name, age, location,
      user: req.user
    });
    await survey.save();
    res.json(survey);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get my surveys
router.get('/me', auth, async (req, res) => {
  try {
    const surveys = await Survey.find({ user: req.user });
    res.json(surveys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
