const express = require("express");
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./database/connection')

const users = require('./models/user')

app.post("/", async (req, res) => {
    try {
        let user = new users(req.body);
        let results = await user.save();
        res.status(200).send(results);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.listen(4000);