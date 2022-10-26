let loginBtn = () => {
    let { email, password } = document.getElementById("loginForm");
    
    // 유효성 검사
    // console.log(email, password);
    if (email.value === "") {
        alert("이메일 입력 ㄱ");
        document.getElementById("email").focus();
        return;
    }
    if (password.value === "") {
        alert("비번 입력 ㄱ");
        // 왜 안되지? -> 된다 또 button => submit 새로고침 문제였음 ^^;;
        document.getElementById("password").focus();
        return;
    }

    $.ajax({
        url: "http://localhost:7777/users/login",
        type: 'POST',
        data: {
            email : email.value,
            password : password.value
        }, 
        success: (res) => {
            console.log(res);
            // 로그인 성공시
            sessionStorage.setItem("email", res.email);
            sessionStorage.setItem("name", res.name);
            location.href ='./../pages/post.html'
            
        },
        error: (err) => {
            // 로그인 실패시
            alert(err.responseJSON.message);
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("email").focus();
            return;
        }
    })
}
