$(document).ready(() => {
    emptyTag();

    // 로그인 성공 시, session에서 꺼내오는 것
    let email = sessionStorage.getItem("email");
    let name = sessionStorage.getItem("name");

    // console.log(email, name);

    if (email === null && name === null) {
        loginFalse();
    } else {
        loginTrue();
    }
});

// 로그아웃 버튼 클릭시 세션 데이터 삭제 및 리다이렉트
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
    // 로그인한 상태에 맞는 버튼을 보여줌.
    $("#btn-group").append(`
        <a href="/client/index.html" class="btn btn-outline-info">home</a>
        <button class="btn btn-outline-secondary" onclick="logoutBtn()">로그아웃</button>
    `)
}

let loginFalse = () => {
    // 로그인 하지 않은 상태
    // ./pages/login.html
    $("#btn-group").append(`
        <a href="/client/pages/signUp.html" class="btn btn-outline-info">회원 가입</a>
        <a href="/client/pages/login.html" class="btn btn-outline-info">로그인</a>
    `)
}