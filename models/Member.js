const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    username: String,
    timezone: String,
    brackets: [String]
}, {collection: 'members'});

module.exports = Member = mongoose.model("members", MemberSchema);