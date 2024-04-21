const PORT = 8000
const express = require('express')
const { MongoClient } = require('mongodb')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')

const uri = 'mongodb+srv://saniarashid928:TennisGirl%401%21@cluster0.u6478r6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json('Hello to my app')

})


app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri)
    const { email, password } = req.body

    const generateduserId = uuidv4()
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await client.connect()
        const database = client.db('roome-data')
        const users = database.collection('users')

        const existingUser = await users.findOne({ email })

        if (existingUser) {
            return res.status(409).send('user already exists. Please log in')
        }

        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generateduserId,
            email: sanitizedEmail,
            hashed_password: hashedPassword
        }
        const insertedUser = await users.insertOne(data)

        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60 * 24,
        })

        res.status(201).json({ token, userID: generateduserId, email: sanitizedEmail})
    } catch (err) {
        console.log(err)
    }

})

app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        console.log('Connecting to MongoDB...');
        await client.connect()
        console.log('Connected to MongoDB.');
        const database = client.db('roome-data')
        const users = database.collection('users')

        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    } finally {
        await client.close()
    }

})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))

