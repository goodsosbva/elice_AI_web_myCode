$(document).ready(() => {
  getPostList();
});

// post의 리스트를 가져오는 함수
let getPostList = () => {
  $("#table-id").empty();
  // readt() -> index.html이 준비 되면 실행!
  // 1. index.html의 로딩이 되면 post의 list를 전부 가져오는 코드를 작성.
  // 2. 가져온 post의 list를 index.html에 뿌려줌.

  // ajax를 통해서 서버에 posts의 list를 요청하는 부분
  // => 서버의 app.js로 가서 posts의 리스틀를 보내주는 부분에가서 데이터를 받아오는 것.
  $.ajax({
    url: `http://localhost:7777/posts`,
    type: "GET",
    success: (res) => {
      console.log(res);
      res.map((data, idx) => {
        $("#table-id").append(`
                    <tr>
                        <th scope="row">${idx + 1}</th>
                        <td>
                            <p id="dtit" onclick="detailBtn('${data._id}')">${data.title}</p>
                        </td>
                        <td>
                            <button type="button" onclick="updateBtn('${data._id}')" class="btn btn-outline-warning">수정</button>
                        </td>
                        <td>
                            <button type="button" onclick="deletePost('${
                              data._id
                            }')" class="btn btn-outline-danger">삭제</button>
                        </td>
                    </tr>
                `);
      });
    },
    error: (err) => {
      console.log(err);
    },
  });
};

// 수정 이벤트 핸들러
let updateBtn = (id) => {
    localStorage.setItem('post-id', id);
    location.href = './pages/update.html';
}

// 디테일 이벤트 핸들러
let detailBtn = (id) => {
    localStorage.setItem('save-id', id);
    location.href = './pages/detail.html';
}

let deletePost = (id) => {
  if (window.confirm("Do you really want to delete?")) {
    // 확인
    // http:localhost:7777/posts/:id/delete
    $.ajax({
      url: `http://localhost:7777/posts/${id}/delete`,
      type: "GET",
      success: (res) => {
        console.log(res);
        alert(res.message);
        getPostList();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
};
