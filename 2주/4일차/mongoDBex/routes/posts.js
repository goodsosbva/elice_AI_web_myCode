// 라우팅하는 파일니까 라우터를 사용하기 위해 당연히 라우터를 가져오는 것.
const { Router } = require("express");
// 라우터함수를 라우터 변수에 넣는 것.
const router = Router();

const { Post } = require("./../models");


// post 리스트를 내보냄
// http://localhost:7777/posts/
router.get("/", async (req, res, next) => {
    // post 데이터를 전부 가져오겠다 === ({})
    const posts = await Post.find({});

    // posts는 json형태이므로 json형태로 응답을 해줌.
    res.json(posts);
})

// 내가 만들어 본거...
router.get("/:id", async (req, res, next) => {
    let { id } = req.params;
    // db.getCollection('wow').find({_id:ObjectId('5bee16ac39ab840015adbec3')})
    const posts = await Post.find({ _id: id });
    res.json(posts);
})

// post를 작성하는 부분
// http://localhost:7777/posts/
router.post("/", async (req, res, next) => {
    let { title, content } = req.body;

    try {
        await Post.create({
            title,
            content
        });
        
        res.json({message: "저장이 완료~!!!"})
    } catch (e) {
        next(e);
    }
});

// posts 삭제
// http:localhost:7777/posts/delete
router.get("/:id/delete", async (req, res, next) => {
    let { id } = req.params;

    try {
        await Post.findByIdAndDelete(id);
        res.json({ messsage: "삭제를 성공!!" });
    } catch(e) {
        next(e)
    }
})

// get http://localhost:7777/posts/1/find
// 게시글 찾기 => 아까 내가 한거랑 원리는 같은데 쓰는 매서드가 조금 다름.
router.get("/:id/find", async (req, res, next) => {
    let { id } = req.params;

    try {
        let findPost = await Post.findById(id);
        res.json(findPost);
    } catch (e) {
        next(e);
    }
})


// post 수정
// http://localhost:7777/:id/update
router.post("/:id/update", async (req, res, next) => {

    // 632bf201c288b4079576e472
    let { id } = req.params;
    let { title, content } = req.body;

    try {
        await Post.findByIdAndUpdate(id, {
            title,
            content
        })
        res.send({ message: "update completed!" });

    } catch (e) {
        next(e);
    }
})

module.exports = router;