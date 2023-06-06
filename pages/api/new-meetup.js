import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    debugger;
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://maxim250291:TbvgntzbxHs4w3I6@cluster0.ebexyyv.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupCollection = db.collection('meetup');

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!'});

  }
}

export default handler;
