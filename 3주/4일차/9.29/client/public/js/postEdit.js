// const shortId = require("../../../server/models/schemas/types/short-id");
$(document).ready(() => {
    let id = localStorage.getItem("updateId");    
    console.log(id);
    
    $.ajax({
        url: `http://localhost:8080/posts/${id}/find`,
        type: 'GET',
        success: (res) => {
            console.log(res.title);
            console.log(document.getElementById("title"))
            // input 박스는 => value, 나머지는 innerText or innerHTML
            document.getElementById("title").value = res.title;
            document.getElementById("content").innerText = res.content;
         },
        error: (err) => {
            next(err);
        }
    })

})

$("#update-post-btn").on('click', () => {
    //title과 content의 현재 value값을 가져오는 부분.
    let title = $("#title").val();
    let content = $("#content").val();
    
    console.log(title, content)
    if (title === "") {
        alert("제목을 입력해주세요.");
        return;
    }

    if (content === "") {
        alert("내용을 입력해주세요.");
        return;
    }

    $.ajax({
        url: `http://localhost:8080/posts/${id}/update`,
        type: 'POST',
        data: {
            title,
            content
        },
        success: (res) => {
            console.log(res);
            alert(res.message);
            location.href = "./post.html";
        },
        error: (err) => {
            next(err);
        }
    })
})


// 함수안에 key값을 인자로 넣어주면, 현재 url의 key에 해당하는 value를 반환해주는 함수
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}