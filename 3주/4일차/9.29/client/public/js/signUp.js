let signUpBtn = () => { 
    let { email, password, rePassword, name } = document.getElementById("signUpForm");

    if (email.value === "") {
        alert("이메일을 입력해주세요.");
        return;
    }

    if (password.value === "") {
        alert("비번을 입력해주세요.");
        return;
    }

    if (rePassword.value === "") {
        alert("2차비번을 입력해주세요.");
        return;
    }

    if (name.value === "") {
        alert("이름을 입력해주세요.");
        return;
    } 

    if (password.value !== rePassword.value) {
        alert("1차 비번과 2차 비번이 다르네요.");
        return;
    }

    $.ajax({
        url: `http://localhost:8080/users/create`,
        type: 'POST',
        data: {
            email: email.value,
            password: password.value,
            name: name.value
        },
        success: (res) => {
            console.log(res);
            alert(res.message)
            location.href = '/client/pages/login.html';
        },
        error: (err) => {
            console.log(err);
        }
    })
}