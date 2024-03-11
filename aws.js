var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://admin:admin1@ashok.opfpajl.mongodb.net/?retryWrites=true&w=majority&appName=ashok";

async function addDB(){
    var ashok = new MongoClient(url, function(req, res){});

    try {
        await ashok.connect();
        console.log("connected");

        var databaseName = "ashok_arora";

        var collection = "SaleBook";

        var database = ashok.db(databaseName);

       await database.createCollection(collection);

        console.log(`Collection '${collection}' created successfully`);

    

    }catch(err){
        console.log(err);
    }finally{
         ashok.close();
        console.log("disconnected");

    }
}

addDB();
