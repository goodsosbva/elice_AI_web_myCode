$(document).ready(() => {
    getPostList();
})

// get post list
let getPostList = () => {
    $.ajax({
        url: "http://localhost:7777/posts",
        type: "GET",
        success: (res) => {
            // console.log(res)
            let str = '';
            // 응답받은 res가 배열이기 때문에 map을 사용.
            res.map((data, index) => {
                str += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td onclick="postDetailBtn('${data.shortId}')">${data.title}</td>
                    <td>elice</td>
                    <td>${data.content}</td>
                    <td>
                    <button type="button" class="btn btn-outline-dark" onclick="postEditBtn('${data.shortId}')">수정</button>
                    <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onclick="saveDeleteId('${data.shortId}')">삭제</button>
                    </td>
                    
                </tr>
                `;
            })
            // console.log(str);
            // 요소로 이루어진 문자열을 tbody에 추가
            $("#post-tbody").append(str);
        },
        error: (err) => {
            console.log(err);
        }
    })
}

// 수정을 하기위해 이동하는 부분
let postDetailBtn = (shortId) => {
    localStorage.setItem("detail-shortId", shortId);
    location.href = './../pages/post-detail.html'
}

let saveDeleteId = (shortId) => {
    localStorage.setItem("delete-shortId", shortId);
}

let deletePostBtn = () => {
    console.log("del hi!")
    let shortId = localStorage.getItem("delete-shortId");
    localStorage.removeItem("delete-shortId");

    $.ajax({
        url: `http://localhost:7777/posts/${shortId}/delete`,
        type: 'GET',
        success: (res) => {
            // console.log(res);
            alert(res.message);
            location.reload();
        },
        error: (err) => {
            console.log(err);
        }
    })
}

let postEditBtn = (shortId) => {
    // ?create=false&id=${shortId}
    location.href = `./../pages/post-edit.html?create=false&shortId=${shortId}`;
}