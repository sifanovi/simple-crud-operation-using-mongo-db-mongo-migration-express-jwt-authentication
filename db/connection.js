const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let db = MongoClient.connect('mongodb+srv://root:root@cluster0.i6yxo.mongodb.net/dine-in-tracker?retryWrites=true&w=majority', { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
  

        db = client.db('dine-in-tracker')
     
        
  

})

console.log(db);









    
