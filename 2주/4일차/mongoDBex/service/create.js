// index.js를 지칭안해도 알아서 가져와 준다.
const { Post } = require("./../models");

exports.create = async () => {
    await Post.create({
        title: '잘한다~ 잘한다',
        content: '좋았다 좋았다 좋았다~'
    })
}