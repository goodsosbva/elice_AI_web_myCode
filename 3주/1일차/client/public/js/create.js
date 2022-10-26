let signForm = document.getElementById("signUpForm");

let signUpForm = () => {
    console.log(signForm);

    if (signForm.email.value === "") {
        alert("아이디 입력해 ^^;;");
        return;
    }
    if (signForm.password.value === "") {
        alert("1차 비밀 입력하라우 ~ >,.<  ;;")
        return;
    }
    if (signForm.rePassword.value == "") {
        alert("2차 비번 입력하라우 ~!!")
    }
    if (signForm.password.value !== signForm.rePassword.value) {
        alert("1차랑 2차 비번이 달라!!! @_@!!")
    }
    if (signForm.name.value == "") {
        alert("이름 입력하라고오오오 ~!!")
    }
    console.log(signForm.email.value);
    console.log(signForm.password.value);
    console.log(signForm.rePassword.value);
    console.log(signForm.name.value);


    // post 저장하는 url
    // POST http://localhost:7777/signUp/
    // $.ajax({
    //     url: `http://localhost:7777/signUp`,
    //     type: "POST",
    //     dataType: 'json',
    //     data: {
    //         email: postForm.email.value,
    //         password: postForm.password.value
    //     },
    //     success: (res) => {
    //         alert(res.message);
    //         location.href = '/client/index.html';
    //     },
    //     error: (err) => {
    //         console.log(err);
    //     }
    // })
}