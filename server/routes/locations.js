
import LocationController from '../controllers/locations.js' 
import express from 'express'


const router = express.Router();

// define routes to get events and locations
router.get('/', LocationController.getAllLocations);


export default router;