const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require("path");
const app = express()
require('dotenv').config();

const PORT = 8000;

// MongoDB connection
const uri = process.env.MONGOURI;

// Define database and collection names
const dbName = "analytics";
const collectionName = "user_logs";

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const reactApp = path.join(__dirname, '..', "edublocks-flutter-logviewer", "dist");

app.use('/', express.static(reactApp));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(reactApp, "index.html"));
})

app.post("/logs", async (req, res) => {
    try {
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const { filter, sort, limit } = req.body;

        const logs = await collection
        .find(filter)
        .sort(sort)
        .limit(limit)
        .toArray();

        res.status(200).json(logs);
    } catch (err) {
        console.error("Error fetching logs:", err);
        res.status(500).json({ error: 'Failed to fetch logs' });
    } finally {
        await client.close();
    }
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}\nhttp://localhost:${PORT}`);
});