// 회원 가입 버튼을 눌렀을 때 발생하는 이벤트 핸들러
let signUpBtn = () => {
    // form의 name이 같은 변수명에다가 요소를 각각 넣어줌.
    let { email, password, rePassword, name } = document.getElementById("signUpForm");
    // console.log(email, password, rePassword, name);
    if (email.value === "") {
        alert("아이디 입력해 ^^;;");
        return;
    }

    // 각 input의 value를 빈 값인지 검사하는 부분 (유효성 검사)
    if (password.value === "") {
        alert("1차 비밀 입력하라우 ~ >,.<  ;;");
        return;
    }
    if (rePassword.value == "") {
        alert("2차 비번 입력하라우 ~!!");
    }
    if (password.value !== rePassword.value) {
        alert("1차랑 2차 비번이 달라!!! @_@!!");
    }
    if (name.value == "") {
        alert("이름 입력하라고오오오 ~!!");
    }

    // 회원의 정보를 가져와서 서버에 request
    $.ajax({
        // 경로 -> 서버에 어떤 경로로 요청을 할건지
        url: `http://localhost:7777/users/signUp`,
        // 회원 정보를 숨겨서 보내기위해 post 방식을 사용
        type: 'POST',
        // 회원의 정보를 담아서 보내는 부분
        data: {
            email: email.value,
            password: password.value,
            name: name.value
        },
        // 요청에 대한 응답을 처리하는 부분
        success: (res) => {
            // console.log(res);
            alert(res.message);
            location.href = "./../pages/login.html";
        },
        error: (err) => {
            // console.log(err);
            if (!err.responseJSON.status) {
                alert(err.responseJSON.message);
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                document.getElementById("rePassword").value = "";
                document.getElementById("name").value = "";
                document.getElementById("email").focus();
                return;
            }
        }
    })
}