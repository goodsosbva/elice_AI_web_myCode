// create.js를 로딩할때 가져옴 ( 바깥에 빼면. )
let postForm = document.getElementById("create-form");

let createPost = () => {
    console.log(postForm);

    if (postForm.title.value === "") {
        alert("제목 입력해 ^^;;");
        return;
    }
    if (postForm.content.value === "") {
        alert("내용 입력하라우 ~ >,.<  ;;")
        return;
    }
    console.log(postForm.title.value);
    console.log(postForm.content.value);


    // post 저장하는 url
    // POST http://localhost:7777/posts/
    $.ajax({
        url: `http://localhost:7777/posts`,
        type: "POST",
        dataType: 'json',
        data: {
            title: postForm.title.value,
            content: postForm.content.value
        },
        success: (res) => {
            alert(res.message);
            location.href = '/client/index.html';
        },
        error: (err) => {
            console.log(err);
        }
    })
}