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

    const generatedUserId = uuidv4()
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
            user_id: generatedUserId,
            email: sanitizedEmail,
            hashed_password: hashedPassword
        }
        const insertedUser = await users.insertOne(data)

        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60 * 24,
        })

        res.status(201).json({ token, userID: generatedUserId, email: sanitizedEmail})
    } catch (err) {
        console.log(err)
    }

})

app.post('/login', async (req, res) => {
    const client = new MongoClient(uri)
    const { email, password } = req.body

    try {
        await client.connect()
        const database = client.db('roome-data')
        const users = database.collection('users')

        const user = await users.findOne({ email })

        const correctPassword = await bycrypt.compare(password, user.hashed_password)

       if (user && correctPassword) {
            const token = jwt.sign(user,email, {
                expiresIn: 6 * 24
            })
            res.status(201).json({ token, userId: user.user_id})
       }
       res.status(400).send('Invalid Credentials')

    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }

})

app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)
    const userID = req.query.userId

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



app.put('/user', async (req, res) => {
    const client = new MongoClient(uri)
    const formData = req.body.formData

    try {
        await client.connect();
        const database = client.db('roome-data')
        const users = database.collection('users')

        if (!formData) {
            return res.status(400).send("formData is missing");
        }
        
        const query = { user_id: formData.user_id }
        const updateDocument = {
            $set: {
                first_name: formData.first_name,
                gender_identity: formData.gender_identity,
                free_time_1: formData.free_time_1,
                show_gender: formData.show_gender,
                gender_interest: formData.gender_interest,
                url1: formData.url1,
                allergies_restrictionsrestrictions: formData.allergies_restrictions,
                major: formData.major,
                goes_out: formData.goes_out,
                introvert_extravert: formData.introvert_extravert,
                l_l_P: formData.l_l_P,
                out_of_state: formData.out_of_state,
                sleep_range: formData.sleep_range,
                status: formData.status,
                gender_identity: formData.gender_identity,
                matches: formData.matches
            },
        }
        const insertedUser = await users.updateOne(query, updateDocument)
        res.send(insertedUser)
    } finally {
        await client.close()
    }
})








app.listen(PORT, () => console.log('Server running on PORT ' + PORT))

