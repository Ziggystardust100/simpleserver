const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = "mongodb://localhost:27017/cursjs";

module.exports = function (app) {

// 	MongoClient.connect(MONGO_URL, function(err, database) {
  
//   const myAwesomeDB = database.db('myDatabaseNameAsAString')
//   console.log("Connected successfully to server");

//   app.people = myAwesomeDB.collection("people");
// });

    MongoClient.connect(MONGO_URL)
        .then((connection) => {
        	// console.log(connection);	
        	const myAwesomeDB = connection.db('myDatabaseNameAsAString');
            app.people = myAwesomeDB.collection("people");
            app.db = myAwesomeDB;
            console.log("Database connection established")
        })
        .catch((err) => console.error(err))

};

//THIS is from tutorial and was not working.
// MongoClient.connect(MONGO_URL)
//         .then((connection) => {
//             app.people = connection.collection("people");
//             console.log("Database connection established")
//         })
//         .catch((err) => console.error(err))
