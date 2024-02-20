const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Template = require('./models/template');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/attendance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/template', async (req, res) => {
  try {
    const { name, roll } = req.body;
    const template = new Template({ name, roll });
    await template.save
