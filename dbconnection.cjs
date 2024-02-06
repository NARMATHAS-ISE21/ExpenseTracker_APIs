
const  {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    MongoClient.connect('mongodb+srv://naru:9486@cluster0.uqkjrbj.mongodb.net/ExpenseTrackerretryWrites=true&w=majority').then(function(client){
       dbConnection = client.db()
       callBack()
    }).catch(function(error){
        callBack(error)
    })
}

function getdb(){
    return dbConnection

}

// Exporting the required functions
module.exports = {connectToDb, getdb}