const PORT = 8080;

const express = require("express");
const {v4:uuidv4} = require('uuid');
const cors = require('cors')
const jwt = require('jsonwebtoken');
const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const uri ='mongodb+srv://chenrainey:g2Q5M2aPWn7xAcXY@cluster0.dyzfj6c.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    // 
})

app.post('/register', (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;
  
    const generateUserId = uuidv4();
  
    const hashedPasswordPromise = bcrypt.hash(password, 10);
  
    hashedPasswordPromise
      .then((hashedPassword) => {
        client.connect();
        const database = client.db('bb-data');
        const users = database.collection('users');
  
        return users.findOne({ email }).then((existing) => {
          if (existing) {
            client.close();
            return res
              .status(409)
              .send('User already exists. Login to access your account');
          }
  
          const emailCheck = email.toLowerCase();
  
          const data = {
            user_id: generateUserId,
            email: emailCheck,
            hashed_password: hashedPassword,
          };
  
          return users.insertOne(data).then((signupUser) => {
            const token = jwt.sign(signupUser, emailCheck, {
              expiresIn: 60 * 24,
            });
  
            client.close();
  
            res.status(201).json({ token, userId: generateUserId, email: emailCheck });
          });
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send('Server Error');
      });
  });
  
app.get('/users', (req, res) => {
    const client = new MongoClient(uri);
  
    client
      .connect()
      .then(() => {
        const database = client.db('bb-data');
        const users = database.collection('users');
  
        return users.find().toArray();
      })
      .then((pastUsers) => {
        res.send(pastUsers);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      })
      .finally(() => {
        client.close();
      });
  });
  

app.listen(PORT, () => console.log("Server running on PORT " + PORT));
