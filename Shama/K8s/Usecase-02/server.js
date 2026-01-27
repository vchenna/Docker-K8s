const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Read environment variables injected from ConfigMap & Secret
const mongoUser = process.env.mongo_user || 'mongouser';
const mongoPassword = process.env.mongo_password || 'securepass';
const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || '27017';

// MongoDB connection string
const mongoUri = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/testdb?authSource=admin`;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Simple schema
const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', ItemSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Node.js frontend running on Kubernetes 🚀');
});

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.get('/add/:name', async (req, res) => {
  const newItem = new Item({ name: req.params.name });
  await newItem.save();
  res.send(`Item "${req.params.name}" added!`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Node.js app listening on port ${PORT}`);
});
