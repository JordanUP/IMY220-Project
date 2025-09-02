const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve frontend build in production/Docker
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

// Stub sign-in
app.post('/api/login', (req, res) => {
  res.json({ success: true, token: 'dummy-token' });  // Dummy response
});

// Stub sign-up
app.post('/api/signup', (req, res) => {
  res.json({ success: true, user: { id: 1, name: req.body.name } });
});

app.listen(port, () => console.log(`Server running on ${port}`));