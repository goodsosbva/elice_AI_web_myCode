$(document).ready(() => {
    let id = localStorage.getItem("detailId");
    // console.log(id);

    $.ajax({
        url: `http://localhost:8080/posts/${id}/find`,
        type: 'GET',
        success: (res) => {
            // console.log(res);
            document.getElementById("title").innerText = res.title;
            document.getElementById("content").innerText = res.content;
            // localStorage.clear();
         },
        error: (err) => {
            next(err);
        }
    })

})