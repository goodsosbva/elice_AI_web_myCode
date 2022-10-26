// 몽구스 모듈 가져옴
const mongoose = require('mongoose');

// 스키마를 가져옴
const PostSchema = require('./schemas/board');

// 스키마를 몽구스 모델로 변경함
// exports.Post <= 이걸 가져오는 것.
exports.Post = mongoose.model('Post', PostSchema);