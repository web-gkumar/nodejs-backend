const mongoose = require('mongoose');

url = "mongodb+srv://Gautam:YumfFqinnEiFBqym@cluster0.ccgp1js.mongodb.net/?retryWrites=true&w=majority" 

// const dbConnection = mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
//  }).then( () => {
//     console.log("DB Connection Successfull");
//  }).catch( () => {
//     console.log("DB Not Connected");
//  })

const dbConnection = () => {
    return mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
         });
};


module.exports = dbConnection;