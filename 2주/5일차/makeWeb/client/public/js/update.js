$(document).ready(() => {
    let id = localStorage.getItem("post-id");
    
    // get http://localhost:7777/posts/:id/find
    $.ajax({
        url: `http://localhost:7777/posts/${id}/find`,
        type: "GET",
        success: (res) => {
            console.log(res);
            // $("#title").val(res.title);
            document.getElementById("title").value = res.title;
            $("#content").val(res.content);
        },
        error: (err) => {
            console.log(err);
        }
    })

    // update
    $("#update-btn").on('click', () => {
        if ($("#title").val() === "") {
            alert("제목 입력하라고~");
            return;
        }

        if ($("#content").val() === "") {
            alert("내용 입력하라고~");
            return;
        }
        // serialize는 제이쿼리가 알아서 쿼리스트링을 해준다.
        console.log($("#update-form").serialize());

        // http://localhost:7777/posts/:id/update
        $.ajax({
            url: `http://localhost:7777/posts/${id}/update`,
            type: 'POST',
            data: $("#update-form").serialize(),
            success: (res) => {
                console.log(res);
                alert(res.message);
                location.href = './../index.html';
            },
            error: (err) => {
                console.log(err);
            }
        })
    });
});