var MongoClient= require('mongodb').MongoClient;
var url = 'mangodb://localhost:27017/mydb';


MongoClient.connect(url, function(err,db){
    if(err) throw err;
    console.log('database created')
    db.close()
})
