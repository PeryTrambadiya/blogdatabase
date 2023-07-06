const express = require('express');
const app = express();
const port = 80;
const { connect, close, getDb } = require('./dbconnection');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


//Read Data
app.get('/users', async (req, res) => {

    // Connect to MongoDB
    await connect();

    const db = await getDb();
    const users = await db.collection('listingsAndReviews').find({}).toArray();
    res.json(users);

    // Closing connection
    close()
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});