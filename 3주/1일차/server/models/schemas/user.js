// 로그인 기능을 넣을거니까.
// 로그인을 위한 정보를 담을 스키마의 정의가 필요하다.
const { Schema } = require("mongoose");
const shortId = require("./types/short-id");

module.exports = new Schema({
    shortId,
    email: String,
    password: String,
    name: String
}, {
    timestamps: true
});