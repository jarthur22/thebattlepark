const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const E4Schema = new Schema ({
    username: String,
    type: String,
    team: [String]
}, {collection: 'e4'});

module.exports = E4 = mongoose.model('e4', E4Schema);