import mongoose from 'mongoose'
import random from "../utils/random";

import shortid from "shortid"

const schema = new mongoose.Schema({
    original: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        unique:true,
        default: shortid.generate
    },
    expiredAt: {
        type: Date,
        default: null
    }
});

const Url = mongoose.model('url', schema);

export default Url