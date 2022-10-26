$("#create-post-btn").on('click', () => {
    //title과 content의 현재 value값을 가져오는 부분.
    let title = $("#title").val();
    let content = $("#content").val();
    
    if (title === "") {
        alert("제목을 입력해주세요.");
        return;
    }

    if (content === "") {
        alert("내용을 입력해주세요.");
        return;
    }

    $.ajax({
        url: `http://localhost:8080/posts/create`,
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