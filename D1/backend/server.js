const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.json());  // Parses JSON bodies – missing this causes req.body undefined → crash

// Serve frontend build in production/Docker
app.use(express.static(path.join(__dirname, '../dist')));

// Stub sign-in
app.post('/api/login', (req, res) => {
  res.json({ success: true, user: { id: 1, email: req.body.email }, token: 'dummy-token' });  // Dummy response
});

// Stub sign-up
app.post('/api/signup', (req, res) => {
  try {
    console.log('Received signup request:', req.body);  // Log body to confirm
    res.json({ success: true, user: { id: 1, name: req.body.name } });
  } catch (err) {
    console.error('Signup error:', err);  // Log to terminal
    res.status(500).json({ error: 'Internal server error: ' + err.message });  // Return JSON
  }
});

// Catch-all handler for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use((err, req, res, next) => {
  console.error('Global error:', err.stack);  // Log full stack
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.listen(port, '0.0.0.0', () => console.log(`Server running on ${port}`));