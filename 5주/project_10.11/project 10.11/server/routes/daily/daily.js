const { Router } = require("express");
const router = Router();
const { Daily } = require("./../../models");
const { User } = require("./../../models");

//일기장 생성
//http://localhost:8080/daily/
router.post("/", async (req, res, next) => {
  console.log(req.body);
  let { title, content, url, email } = req.body;

  try {
    const authData = await User.findOne({ email });

    await Daily.create({
      title,
      content,
      url,
      author: authData,
    });

    res.json({
      status: true,
      message: "일기장을 생성하였습니다.",
    });
  } catch (e) {
    next(e);
  }
});

// 전체 게시글 가져오기
router.get("/", async (req, res, next) => {
  // 현재 페이지
  // req.query page라는 쿼리를 가져옴. undefineed면 1
  let page = Number(req.query.page) || 1;

  if (page < 1) {
    next("존재 하지 않은 페이지임!");
  }

  // 한 페이제에 보여줄 일기장의 수
  let perPage = Number(req.query.perPage) || 6;

  if (perPage > 6) {
    next("한 페이지에는 6개의 일기장만 가능해~");
    return;
  }

  let total = await Daily.countDocuments({});
  // 일기장을 생성한 회원의 정보와 함께 리스트를 가져옴
  let daily = await Daily.find({})
    .sort({ createdAt: -1 }) // 내림차순 정렬
    .skip(perPage * (page - 1)) // 현재 페이지를 * 6 = 게시글 전체를 가져옴
    .limit(perPage) // 6개의 일기장을 가져옴
    .populate("author");

  let totalPage = Math.ceil(total / perPage);

  res.json({ daily, totalPage });
});

// http://localhost:8080/shortId/update
router.post("/:shortId/update", async (req, res, next) => {
  const { shortId } = req.params;
  let { title, content, url } = req.body;

  try {
    await Daily.updateOne(
      { shortId },
      {
        title,
        content,
        url,
      }
    );

    res.json({
      status: true,
      message: "일기장 수정 완.",
    });
  } catch (e) {
    next(e);
  }
});

// http://localhost:8080/daily/:shortId/delete
router.post("/:shortId/delete", async (req, res, next) => {
  const { shortId } = req.params;

  try {
    await Daily.deleteOne({ shortId });

    res.json({
      status: true,
      message: "삭제 완.",
    });
  } catch (e) {
    next(err);
  }
});

module.exports = router;
