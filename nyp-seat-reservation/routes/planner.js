// All planner's webpages are contained here

// TODO: Check whether seats in event or venue are already taken before editing them
// TODO: When deleting venues, delete any events that take place in them as well
// TODO: Show loading screen when creating map

const express = require('express');
const router = express.Router();

const flash = require('../utils/flash');
const auth = require('../utils/check-auth');

const Venue = require('../models/Venue');

// Sample user object to test navigation
// For the planner pages, this user is a planner

// When creating new routes avoid using the route's name in the webpage's name
// Eg: Use router.get('/events', ...) instead of router.get('/planner-events', ...) cause then the url will be '/planner/planner-events' which is super redundant
// Always keep route urls are short as possible

router.get('/events', auth.isPlanner, async (req, res) => {
    // Put your ejs files under your specific folder
	// Eg: Planner .ejs files should be put under the planner folder
	res.render('planner/planner-all-events', { 
		title: "Events", 
		user: req.user 
	});
});

router.get('/events/:id', auth.isPlanner, async (req, res) => {
	res.render('planner/planner-edit-event', { 
		title: "Events", 
		user: req.user  
	});
});

router.get('/add-event', auth.isPlanner, async (req, res) => {
	res.render('planner/planner-add-event', { 
		title: "Add Event", 
		user: req.user  
	});
});

router.get('/venues', auth.isPlanner, async (req, res) => {
	const venues = await Venue.getAllVenues();

	res.render('planner/planner-all-venues', { 
		title: "Venues", 
		user: req.user,
		venues: venues,
	});
});

router.get('/venues/:id', auth.isPlanner, async (req, res) => {
	const id = req.params.id;
	const venue = await Venue.getVenueById(id);

	if (!venue) {
		flash.error(req, "That ID does not belong to any venue!");
		res.redirect('/planner/venues');
		return;
	}

	console.log(venue)
	res.render('planner/planner-edit-venue', { 
		title: "Venues", 
		user: req.user,
		venue: venue,
	});
});

router.get('/add-venue', auth.isPlanner, async (req, res) => {
	res.render('planner/planner-add-venue', { 
		title: "Add Venue", 
		user: req.user  
	});
});

module.exports = router;