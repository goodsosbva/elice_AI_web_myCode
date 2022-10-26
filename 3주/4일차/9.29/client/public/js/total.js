$(document).ready(() => {
    emptyTag();

    let email = sessionStorage.getItem("email");
    let name = sessionStorage.getItem("name");

    if (name == null && email == null) {
        isNotLogin();
    } else {
        isLogin();
    }
})

let emptyTag = () => {
    //요소 안의 버튼들을 초기화
    $("#btn-group").empty();
}

let isLogin = () => {
    $("#btn-group").append(`
    <button onclick="logoutBtn()" class="btn btn-outline-danger me-2">Logout</button>
    `)
}

let isNotLogin = () => {
    $("#btn-group").append(`
    <a href="/client/pages/login.html" class="btn btn-outline-primary me-2">Login</a>
    <a href="/client/pages/signUp.html" class="btn btn-outline-primary">Sign-up</a>
    `)
}

let logoutBtn = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    location.href = "./../index.html";
}



