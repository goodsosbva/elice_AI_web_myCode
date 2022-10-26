// 몽구스에서 스키마를 가저오고,, - 스키마를 정의하기 위해
const { Schema } = require('mongoose');


// title같은건 내가 정의해서 스키마를 만든 이후
const PostSchema = new Schema({
    title: String,
    content: String,
}, {
    timestamps: true,

});

// export
module.exports = PostSchema;