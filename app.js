//  main entry point 
// set up includes the server, middleware, and routes 

const express = require('express');
const path = require('path');
const pageRoutes = require('./routes/pageRoutes');

const app = express();

// ensuring engine is set to ejs
app.set('view engine', 'ejs');

// static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// middleware (url encoded) for form submissions
app.use(express.urlencoded({ extended: true }));

// page routes
app.use('/', pageRoutes);

// port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
