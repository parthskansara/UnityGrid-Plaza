import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'

import EventRouter from './routes/events.js'
import LocationRouter from './routes/locations.js'
// import the router from your routes file


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    // app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
}
else if (process.env.NODE_ENV === 'production') {
    // app.use(favicon(path.resolve('public', 'party.png')))
    app.use(express.static('public'))
}

// specify the api path for the server to use
app.use('/api/events', EventRouter)
app.use('/api/locations', LocationRouter)


if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})