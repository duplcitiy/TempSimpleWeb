const express = require('express');
const path = require('path');

const app = express();

// Define the path to your public static folder
const publicPath = path.join(__dirname, 'public');

// Serve static files from the public folder
app.use(express.static(publicPath));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
