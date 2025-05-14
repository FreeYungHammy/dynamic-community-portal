// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

// replace with real data - just dummy data for now
const teamMembers = [
    { name: 'Calvin Nijenhuis', role: 'Team Leader', studNum: 600373},
    { name: 'Brett Wilson', role: 'Backend Developer', studNum: 601081},
    { name: 'Danielle Janse van Vuuren', role: 'Backend Developer', studNum: 600699},
    { name: 'Ruan Bath', role: 'Frontend Developer', studNum:  600544},
    { name: 'Le-Marsh Vaughan', role: 'Data Manager', studNum: 600857},
]

// replace with real data - just dummy data for now
const events = [
 { title: "Men's Mental Health Awareness", date: '2025-06-04', location: 'Pretoria', image: 'MMHA.jpg' },
    { title: "CLC MIDYEAR MEETING", date: '2025-07-03', location: 'Kempton Park', image: 'CLC.jpg' },
    { title: "CLC MIDYEAR MEETING PTA ", date: '2025-07-04', location: 'Stellenbosch', image: 'CLC.jpg' },
    { title: "MEN'S MENTAL HEALTH AWARENESS", date: '2025-07-04', location: 'Stellenbosch', image: 'BTH.jpg' },
    { title: "Beyond the High", date: '2025-07-22', location: 'Kempton Park', image: 'BTH.jpg' },
    { title: "STUDENT WELLNESS EXPO", date: '2025-07-23', location: 'Pretoria', image: 'SWE.jpg' },
    { title: "Beyond the High", date: '2025-07-29', location: 'Pretoria', image: 'BTH.jpg' },
    { title: "STUDENT WELLNESS EXPO", date: '2025-07-30', location: 'Kempton Park', image: 'SWE.jpg' }
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
    res.render('pages/thankyou', { messages });
});

module.exports = router;

