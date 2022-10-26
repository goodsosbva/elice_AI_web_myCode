const { Schema } = require("mongoose");
const shortId = require('./types/short-id');

module.exports = new Schema({
    shortId,
    title: String,
    content: String,
    // 이거 왜쓰는지 질문할 것!
    // user.js 스키마를 가져온것!
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
}, {
    timestamps: true,
});
