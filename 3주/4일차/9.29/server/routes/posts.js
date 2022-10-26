const { Router } = require("express");
const { Post } = require("../models");
const router = Router();

// localhost:8080/posts
router.get('/', async (req, res, next) => {
    let data = await Post.find({});
    // console.log(data)
    res.json(data);
})

// localhost:8080/posts/:id/find
router.get('/:id/find', async (req, res, next) => {
    let { id } = req.params;
    console.log(id);
    try {
        let findData = await Post.findOne({
            // 데이터베이스에서는 shorId로 저장하는데 id로 넣어주면
            // 데이터베이스는 알길이 없음.
            // 때문에 id가 무엇을 의미하는지 알려줘야함.
            shortId : id
        });
        console.log(findData); 
        res.json(findData)
    } catch (err) {
        next(err);
    }
    
})

// localhost:8080/posts/:id/delete
router.post('/:id/delete', async (req, res, next) => {
    let { id } = req.params;
    console.log(id);
    await Post.deleteOne({ shortId : id });
    try {
        res.json({
            message: "삭제 성공",
            status: true
        })
    } catch(err) {
        next(err)
    }
})

// localhost:8080/posts/:id/update
router.post('/:id/update', async (req, res, next) => {
    let { id } = req.params;
    let { title, content } = req.body;
    
    console.log("hi", id, title, content);
    try {
        await Post.updateOne(
            { shortId: id },
            { title, content })
        res.json({
            message: "수정이 완료됨",
            status: true
        })

    } catch (err) {
        next(err);
    }
    
    
})

// localhost:8080/posts/create
router.post('/create', async (req, res, next) => {
    let { title, content } = req.body;

    try {
        await Post.create({
            title,
            content
        })
        
        res.json({
            message: "작성이 완료됨",
            status: true
        })

    } catch (err) {
        next(err);
    }
})

module.exports = router;