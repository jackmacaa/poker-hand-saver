import { MongoClient, ObjectId } from 'mongodb';

const connectDb = async () => {
    const uri = "mongodb://localhost:27017/poker-db-local";

	try {
        const client = new MongoClient(uri);
        await client.connect();  
        return client;
    } catch (e) {
        console.log(`Error connecting to mongodb, Error: ${e}`);
    } 
}

export const createHand = async (data) => {
    const newHand = {
        numberOfPlayers: parseInt(data['number-of-players']),
        sb: parseInt(data.sb),
        bb: parseInt(data.bb),
        dateCreated: new Date()
    };

    try {
        const client = await connectDb();
        const result = await client.db("poker-db-local").collection("hands").insertOne(newHand);
        console.log(`New listing created with the following id: ${result.insertedId}`);
        await client.close();   
    } catch (e) {
        console.log(`The creating of new Hand failed, Error: ${e}`);
    }
}

export const getHands = async () => {
    try {
        const client = await connectDb();
        return client.db("poker-db-local").collection("hands").find({}, {"numberOfplayers": 1}).toArray();   
    } catch (e) {
        console.log(`Getting hands failed, Error: ${e}`); 
    }
}

export const deleteHand = async (handId) => {
    try {
        const client = await connectDb();
        const result = await client.db("poker-db-local").collection("hands").deleteOne({"_id": ObjectId(handId)});
        console.log(`Deleted hand with id: ${handId}, result: ${result.acknowledged}`);
        await client.close();
    } catch (e) {
        console.log(`The deleting of hand id: ${handId}, Error: ${e}`);
    }  
}
