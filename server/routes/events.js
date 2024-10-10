import express from 'express'
import EventController from '../controllers/events.js'


const router = express.Router();

// define routes to get events and locations
router.get('/all', EventController.getAllEvents);
router.get('/:location_id', EventController.getEventByLocation);


export default router;
