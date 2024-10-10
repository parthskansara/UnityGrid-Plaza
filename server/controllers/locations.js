import { pool } from '../config/database.js'

const getAllLocations = async (req, res) => {
    try{
        const results = await pool.query('SELECT * FROM "locations"')
        // console.log(results)
        res.status(200).json(results)
    }
    catch (error){
        res.status(409).json({ error: error.message })
    }
}

export default {getAllLocations}