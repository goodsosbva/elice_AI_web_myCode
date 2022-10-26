const { Router } = require("express");
const router = Router();
const { Post } = require('../models');

// post list
// http://localhost:7777/posts/ get
router.get('/', async (req, res, next) => {
    res.json(await Post.find({}));
})


// post create
// http://localhost:7777/posts/ post
router.post('/', async (req, res, next) => {
    // body에서 title과 content를 가져옴
    const { title, content } = req.body;
    // console.log(req.body);
    try {
        // title과 content를 저장하는 부분
        await Post.create({
            title,
            content,
        });
        // 저장이 되었으면 작성 완료 메세지를 응답
        res.json({
            message: "전송 성공!",
            status: true
        });
    } catch (err) {
        next(err);
    }
})

// post find
// http://localhost:7777/posts/:id/find
router.get("/:shortId/find", async (req, res, next) => {
    // 파라미터에서 shortI을 가져옴,
    let { shortId } = req.params;
    try {
        // ShorIds에 해당하는 게시글을 찾기위한 부분
        let findPost = await Post.findOne({ shortId });
        // console.log(findPost);
        res.json(findPost);
    } catch (err) {
        next(err);
    }
})

// post update
// http://localhost:7777/posts/:id/update
router.post("/:shortId/update", async (req, res, next) => {
    let { shortId } = req.params;
    // console.log(shortId);
    let { title, content } = req.body;
    try {
        // 가져온 데이터의 shortId에 해당하는 게시글 title과 content 수정
        await Post.updateOne({ shortId }, {
            title,
            content
        });

        // 수정을 완료했다는 응답
        res.json({
            message: "게시글 수정 완!",
            status: true
        })
    } catch (err) {
        nexg(err);
    }
})

// polst delete
// http://localhost:7777/posts/:id/delete
// shortID 변수명은 같아야 한다
router.get("/:shortId/delete", async (req, res, next) => {
    let { shortId } = req.params;

    try {
        // DB에서 shortId가 삭제되는 부분
        await Post.deleteOne({ shortId });
        res.json({ message: "삭제 성공!" , status: true})
    } catch (e) {
        next(e);
    }
})


module.exports = router;