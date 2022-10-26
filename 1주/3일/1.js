function varFor() {
    for (var i = 0; i < 3; ++i) {
        console.log("var i:", i)
    }
    console.log("var final i:", i);
}

varFor();

// let은 블록스코프라서 밖에서 조회가 안된다.
function letFor() {
    for (let i = 0; i < 3; ++i) {
        console.log("let i:", i)
    }
    console.log("let final i:", i);
}

letFor();