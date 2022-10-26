let loginBtn = () => {
    let { email, password } = document.getElementById("loginForm");

    if (email.value === "") {
        alert("이메일을 입력해주세요.");
        return;
    }

    if (password.value === "") {
        alert("비번을 입력해주세요.");
        return;
    }

    $.ajax({
        url: 'http://localhost:8080/users/login',
        type: 'POST',
        data: {
            email: email.value,
            password: password.value
        },
        success: (res) => {
            console.log(res);
            sessionStorage.setItem("email", res.email);
            sessionStorage.setItem("name", res.name);
            location.href = "./../pages/post.html"
        },
        error: (err) => {
            console.log(err);
            alert(err.responseJSON.status);
            if (!err.responseJSON.status) {
                alert("로그인 실패!");
            }
        }
    })
}