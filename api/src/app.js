import express from 'express'
import mongoose from 'mongoose'
import morgan from "morgan";
import cors from 'cors'

import Url from "./models/url";
import path from './utils/path'

const db = 'mongodb://mongo/test';
mongoose.connect(db)
    .then(() => console.log(`Connected to ${db}...`));

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/url', async (req, res) => {
    try {
        const count = await Url.count();
        return res.json({count})
    } catch (e) {
        return res.sendStatus(500)
    }
});

app.post('/', async (req, res) => {
    try {
        const {original} = req.body;
        const url = new Url({original: path.get(original)});
        await url.save();
        return res.json({short:'http://localhost:5000/'+url.short})
    } catch (e) {
        console.log(e)
        if (e.code === 'ERR_INVALID_URL') return res.status(400).send('Invalid URL');
        return res.sendStatus(500)
    }
});

app.get('/:code', async (req, res) => {
    try {
        const {code} = req.params;
        const url = await Url.findOne({short: code});
        if (!url) return res.sendStatus(404);
        return res.redirect(`https://${url.original}`)
    } catch (e) {
        return res.sendStatus(500)
    }
});


const port = process.env.PORT || 3000;
const callback = () => console.log(
    `Listening on port ${port}...`
);
const server = app.listen(port, callback);

export default server