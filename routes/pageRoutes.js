// Description: This file contains the routes for the pages of the website.
// It handles the rendering of the pages and the form submission for the contact page.
const express = require('express');
const router = express.Router();

// dummy data currently - needs to be replaced with actual data 
const teamMembers = [
    { name: 'Calvin Nijenhuis', role: 'Project Member' },
    { name: 'Brett Wilson', role: 'Project Member' },
    { name: 'Danielle Janse van Vuuren', role: 'Project Member' },
    { name: 'Ruan Bath', role: 'Project Member' },
    { name: 'Le Marsh Vaughan', role: 'Project Member' }
];

//images need to be added
const events = [
    { title: 'Hackathon', date: '2025-05-15', location: 'Online', image: '' }, 
    { title: 'Art Festival', date: '2025-06-01', location: 'Stellenbosch', image: '' },
    { title: 'Music Jam', date: '2025-07-20', location: 'Cape Town', image: '' }
];

const messages = [];

// routes
router.get('/', (req, res) => res.render('pages/home', { teamMembers, events }));
router.get('/about', (req, res) => res.render('pages/about', { teamMembers }));
router.get('/events', (req, res) => res.render('pages/events', { events }));
router.get('/contact', (req, res) => res.render('pages/contact'));
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    messages.push({ name, email, message });
    res.redirect('/thankyou');
});
router.get('/thankyou', (req, res) => res.render('pages/thankyou'));

// exporting router
module.exports = router;
