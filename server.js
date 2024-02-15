const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const routes = require('./routes/carRoutes');
app.use('/api', routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
