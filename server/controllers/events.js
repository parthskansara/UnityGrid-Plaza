import { pool } from '../config/database.js'

const getAllEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM "events"')
        // console.log(results)
        res.status(200).json(results)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getEventByLocation = async (req, res) => {
    const location_id = req.params.location_id;
    try {
        const results = await pool.query('SELECT * FROM "events" WHERE location_id = $1', [location_id]);
        res.status(200).json(results);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default { getAllEvents, getEventByLocation };