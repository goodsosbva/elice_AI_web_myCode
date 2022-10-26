$(document).ready(() => {
    emptyTag();

    let email = sessionStorage.getItem("email");
    let name = sessionStorage.getItem("name");

    // console.log(email, name);

    if (email === null && name === null) {
        loginFalse();
    } else {
        loginTrue();
    }
});

let logoutBtn = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    location.href = '/client/index.html';
}

let emptyTag = () => {
    // 요소 안의 버튼들을 초기화
    $("#btn-group").empty();
}

let loginTrue = () => {
    // 로그인한 상태
    $("#btn-group").append(`
        <a href="/client/index.html" class="btn btn-outline-info">home</a>
        <button class="btn btn-outline-secondary" onclick="logoutBtn()">로그아웃</button>
    `)
}

let loginFalse = () => {
    // 로그인 하지 않은 상태
    // ./pages/login.html
    $("#btn-group").append(`
        <a href="./pages/index.html" class="btn btn-outline-info">home</a>
        <a href="./pages/login.html" class="btn btn-outline-info">로그인</a>
    `)
}