$(document).ready(() => {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let content = document.getElementById("content");

    let detailId = localStorage.getItem("detail-shortId");
    
    // console.log(detailId);
    $.ajax({
        url: `http://localhost:7777/posts/${detailId}/find`,
        type: 'GET',
        success: (res) => {
            // console.log(res);
            // input태그 같은걸 제외한 태그에 데이터 넣을때는 innerHTML
            // author.innerHTML = res.author;
            $("#title").text(res.title);
            content.innerHTML = res.content;
        },
        error: (err) => {
            console.log(err);
        }
    })


})