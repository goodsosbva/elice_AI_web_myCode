// const shortId = require("../../../server/models/schemas/types/short-id");

let editForm = document.getElementById("editForm");

$(document).ready(() => {
    if (getParameterByName("create") === "true") {
        // 게시물 생성
        createPostEditBtn();
        
    } else {
        // 게시물 수정
        updatePostEditBtn();
        getUpdatePost(getParameterByName("shortId"));
        
    }

    // 게시글 생성 요청 함수
    $("#create-post-btn").on("click", (e) => {
        if (editForm.title.value === "") {
            alert("title 입력해 ^^;;");
            return;
        }
        if (editForm.content.value === "") {
            alert("content 입력하라우 ~ >,.<;;")
            return;
        }
    
        console.log(editForm.title.value);
        console.log(editForm.content.value);
        // 게시글 생성 요청
        $.ajax({
            url: "http://localhost:7777/posts",
            type: "POST",
            data: {
                title: editForm.title.value,
                content: editForm.content.value
            },
            // 게시글 생성 요청에 대한 응답
            success: (res) => {
                console.log(res);
                if (res.status) {
                    // 성공 메시지
                    alert(res.message);
                    // 게시글 리스트 페이지로 리다이렉트
                    location.href='../pages/post.html'
                } else {
                    alert(res.error);
                    location.reload();
                }
            },
            error: () => {
                console.log(err);
            }
        })
    })

    // 실질적으로 수정을 한 뒤, 수정 버튼을 통해서 수정을 하는 곳
    $("#update-post-btn").on('click', () => {
        let shortId = getParameterByName("shortId");

        let title = editForm.title.value;
        let content = editForm.content.value;

        if (title === "") {
            alert("title 입력해 ^^;;");
            return;
        }
        if (content === "") {
            alert("content 입력하라우 ~ >,.<;;")
            return;
        }

        $.ajax({
            // url: "http://localhost:7777/posts",
            url: `http://localhost:7777/posts/${shortId}/update`,
            type: 'POST',
            data: {
                title,
                content
            },
            success: (res) => {
                console.log(res);
                if (res.status) {
                    alert(res.message);
                    location.href='../pages/post.html'
                } else {
                    alert(res.error);
                    location.reload();
                }
            },
            error: () => {
                console.log(err);
            }
        })
    })

})


// function ff() {
//     console.log("123")
// }

// 함수안에 key값을 인자로 넣어주면, 현재 url에 key에 해당하는 value를 반환해주는 함수.
let createPostEditBtn = () => {
    $("#post-edit-group").empty();
    $("#post-edit-group").append(
        `
        <button type="button" class="btn btn-outline-primary me-2" id="create-post-btn">생성</button>
        <button type="button" class="btn btn-outline-danger me-2" onclick="history.back()" id="cancel-post-btn">취소</button>
        `
    )
}

// 수정 페이지로 접근을 하게 되면, 수정 버튼을 보여주는 함수
let updatePostEditBtn = () => {
    $("#post-edit-group").empty();
    $("#post-edit-group").append(
        `
        <button type="button" class="btn btn-outline-info me-2" id="update-post-btn">수정</button>
        <button type="button" class="btn btn-outline-danger me-2" onclick="history.back()" id="cancel-post-btn">취소</button>
        `
    )
}

// 요청
// 실질적으로 수정하기 전 데이터를 가져오느 부분
let getUpdatePost = (shortId) => {

    // shortId에 해당하는 게시글을 찾기 위해 서버에 요청하는 부분
    $.ajax({
        url: `http://localhost:7777/posts/${shortId}/find`,
        type: 'GET',
        success: (res) => {
            // console.log(res);
            editForm.title.value = res.title;
            editForm.content.value = res.content;
        },
        error: (err) => {
            console.log(err);
        }
    })
}


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[]]/g, '\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}