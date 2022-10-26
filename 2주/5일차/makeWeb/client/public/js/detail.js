$(document).ready(() => {
    let id = localStorage.getItem("save-id");
    
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

});