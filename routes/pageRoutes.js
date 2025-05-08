// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

// replace with real data - just dummy data for now
const teamMembers = [
    { name: 'Calvin Nijenhuis', role: 'Team Lead' },
    { name: 'Brett Wilson', role: 'Backend Developer' },
    { name: 'Danielle Janse van Vuuren', role: 'Frontend Developer' },
    { name: 'Ruan Bath', role: 'Data Manager' },
    { name: 'Le Marsh Vaughan', role: 'Documentation Manager' }
];

// replace with real data - just dummy data for now
const events = [
    { title: 'Hackathon', date: '2025-05-15', location: 'Online', image: 'tech.jpg' },
    { title: 'Art Festival', date: '2025-06-01', location: 'Stellenbosch', image: 'art.jpg' },
    { title: 'Music Jam', date: '2025-07-20', location: 'Cape Town', image: 'music.jpg' }
];

// message storage 
const messages = [];

// home page
router.get('/', (req, res) => {
    res.render('pages/home', { teamMembers, events });
});

// about page
router.get('/about', (req, res) => {
    res.render('pages/about', { teamMembers });
});

// events page
router.get('/events', (req, res) => {
    res.render('pages/events', { events });
});

// contact page
router.get('/contact', (req, res) => {
    res.render('pages/contact');
});

// (POST) for contact form  
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    messages.push({ name, email, message });
    res.redirect('/thankyou');
});

// thank you page
router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou');
});

module.exports = router;
