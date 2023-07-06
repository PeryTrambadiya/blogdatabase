// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://perytrambadiya007:XWPn783FolDCc6Td@cluster0.pfy3nfn.mongodb.net/'; //  MongoDB connection string
// const dbName = 'sample_airbnb'; 


// let client;
// let db;

// async function connect() {
//     try {
//         client = await MongoClient.connect(uri);
//         db = client.db(dbName);
//         console.log('Connected to MongoDB');
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//     }
// }

// async function getDb() {
//     return db;
// }

// function close() {
//     client.close();
//     console.log('Disconnected from MongoDB');
// }

// module.exports = { connect, getDb, close };
