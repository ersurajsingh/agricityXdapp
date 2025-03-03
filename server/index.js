const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample API endpoints
app.get('/api/products', (req, res) => {
  // Return product listings
  res.json([/* product data */]);
});

app.get('/api/farmers', (req, res) => {
  // Return farmer profiles
  res.json([/* farmer data */]);
});

app.get('/api/subsidies', (req, res) => {
  // Return subsidy opportunities
  res.json([/* subsidy data */]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 