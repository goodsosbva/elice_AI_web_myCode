$(document).ready(() => {
    let boardId = document.getElementById("post-tbody");

    $.ajax({
        url: `http://localhost:8080/posts`,
        type: 'GET',
        success: (res) => {
            console.log(res);
            let str = '';
            res.map((data, idx) => {
                str += `
                <tr>
                    <th scope="row">${idx + 1}</th>
                    <td>
                        <p id="dtit" onclick="detailBtn('${data.shortId}')">${data.title}</p>
                    </td>
                    <td>
                        <button type="button" onclick="updateBtn('${data.shortId}')" class="btn btn-outline-warning">수정</button>
                    </td>
                    <td>
                        <button type="button" onclick="deletePost('${data.shortId}')" class="btn btn-outline-danger">삭제</button>
                    </td>
                </tr>
                `
            })
            boardId.innerHTML = str;
            // $("#post-tbody").append(str);
        },
        error: (err) => {
            next(err);
        }
    })
});
  

let detailBtn = (id) => {
    localStorage.setItem("detailId", id);
    location.href = "/client/pages/post-detail.html";
}

let updateBtn = (id) => {
    localStorage.setItem("updateId", id);
    location.href = "/client/pages/post-edit.html";
}

// localhost:8080/posts/:id/delete
let deletePost = (delId) => {
    console.log("삭제시도?")
    $.ajax({
        url: `http://localhost:8080/posts/${delId}/delete`,
        type: 'POST',
        success: (res) => {
            console.log(res);
            alert(res.message);
            location.reload();
        },
        error: (err) => {
            next(err);
        }

    })
}