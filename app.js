const middlewareWrapper = require('cors')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware

app.use(express.json())

app.use('/api/v1/tasks', tasks)



const port = 3000

app.listen(port, console.log(`server running on port ${port}..`))