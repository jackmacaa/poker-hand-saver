import { MongoClient } from 'mongodb';

const connectDb = async () => {
    const uri = "mongodb://localhost:27017/poker-db-local";
    const client = new MongoClient(uri);

	try {
        await client.connect();  
        console.log('DB connected');

        return client;
    } catch (e) {
        console.log(`Error connecting to mongodb ${e}`);
    } 
}

export const createHand = async (data) => {
    const client = await connectDb();

    const newHand = {
        numberOfPlayers: data['number-of-players'],
        sb: data.sb,
        bb: data.bb,
        dateCreated: new Date()
    };

    const result = await client.db("poker-db-local").collection("hands").insertOne(newHand);
    console.log(`New listing created with the following id: ${result.insertedId}`);

    await client.close();
}

export const getHands = async () => {
    const client = await connectDb();
    const result = client.db("poker-db-local").collection("hands").find({}, {"numberOfplayers": 1});
    
    return result.toArray();
}

