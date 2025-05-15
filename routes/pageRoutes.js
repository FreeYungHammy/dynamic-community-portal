// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

// replace with real data - just dummy data for now
const teamMembers = [
    { name: 'Calvin Nijenhuis', role: 'Team Leader', studNum: 600373, image: 'calvin.png' },
    { name: 'Brett Wilson', role: 'Backend Developer', studNum: 601081, image: 'Brett.png' },
    { name: 'Danielle Janse van Vuuren', role: 'Backend Developer', studNum: 600699, image: 'danielle.png' },
    { name: 'Ruan Bath', role: 'Frontend Developer', studNum: 600544, image: 'ruan.png' },
    { name: 'Le-Marsh Vaughan', role: 'Data Manager', studNum: 600857, image: 'le-marsh.png' }
]

// replace with real data - just dummy data for now
const events = [
    { title: "MEN'S MENTAL HEALTH AWARENESS", date: '2025-06-04', location: 'Pretoria', image: 'MMHA.jpg' },
    { title: "CLC MIDYEAR MEETING", date: '2025-07-03', location: 'Kempton Park', image: 'CLC1.jpg' },
    { title: "BEYOND THE HIGH", date: '2025-07-22', location: 'Kempton Park', image: 'BTH.jpg' },
    { title: "HACKATHON", date: '2025-07-28', location: 'Pretoia', image: 'HT.jpg' },
    { title: "CLC MIDYEAR MEETING PTA ", date: '2025-07-30', location: 'Stellenbosch', image: 'CLC2.jpg' },
    { title: "STUDENT WELLNESS EXPO", date: '2025-08-04', location: 'Kempton Park', image: 'SWE.jpg' }
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

