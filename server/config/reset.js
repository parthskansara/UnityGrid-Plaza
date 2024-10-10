import eventsData from "../data/eventsData.js";
import locationData from "../data/locationData.js";
import { pool } from "./database.js";


async function createEventsTable () {
    const createEventsTableQuery = `
        DROP TABLE IF EXISTS "events";

        CREATE TABLE IF NOT EXISTS "events" (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            image TEXT,
            remaining INTEGER,
            location_id INTEGER NOT NULL
        )
    `;

    try {
        const results = await pool.query(createEventsTableQuery)
        console.log(results);
        
        console.log("Events table created successfully");       
    }
    catch(err){
        console.log("Error: ", err);        
    }
}

async function seedEventsTable () {
    await createEventsTable();

    eventsData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO "events" (title, date, time, image, remaining, location_id) VALUES ($1, $2, $3, $4, $5, $6)',
        }
        const values = [
            event.title,
            event.date,
            event.time,
            event.image,
            event.remaining, 
            event.location_id
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err){
                console.error("Error inserting event: ", err)
                return
            }
            console.log(`${event.title} added successfully!`);
        })
    })
}


async function createLocationsTable () {
    const createLocationTableQuery = `
        DROP TABLE IF EXISTS "locations";

        CREATE TABLE IF NOT EXISTS "locations" (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            address TEXT NOT NULL,
            city TEXT NOT NULL,
            state TEXT NOT NULL,
            zip INTEGER NOT NULL,
            image TEXT
        )
    `;

    try {
        const results = await pool.query(createLocationTableQuery)
        console.log("Location table created successfully");       
    }
    catch(err){
        console.log("Error: ", err);        
    }
}

async function seedLocationsTable () {
    await createLocationsTable();

    locationData.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO "locations" (name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6)',
        }
        const values = [
            location.name,
            location.address,
            location.city,
            location.state,
            location.zip,
            location.image
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err){
                console.error("Error inserting event: ", err)
                return
            }
            console.log(`${location.name} added successfully!`);
        })
    })
}

async function resetDatabase() {
    await seedEventsTable();
    await seedLocationsTable();
}
resetDatabase();