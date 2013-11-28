var MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://127.0.0.1:27017/helloMongo', function(err, db) {
  if (err) {
    throw err;
  } else {
    var collection = db.collection('users');
    collection.findOne({
      "tenant_id": 1
    }, function(error, doc) {
      if (error) {
        throw err;
      } else if (doc) {
        console.log(JSON.stringify(doc));
      } else {
        console.log('no entry in mongodb for this tenant.');
      }
    });

var a = "special_acess.communication.manager";
    collection.update({
      "tenant_id": 1
    }, {
      $set: {
        "special_acess.communication.manager" : {"get":true,"update":true}
      }
    }, function(err) {
      if (err) console.log(err);
      else console.log('done');
    });
  }
});