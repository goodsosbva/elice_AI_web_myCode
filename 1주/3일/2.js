function changeToUsd(krw) {
    const rate = 1046;
    return (krw / rate).toFixed(3);
}


const krw = 1000000;
console.log(changeToUsd(krw));


function getMaxDiff(nums) {
    return Math.max(...nums) - Math.min(...nums)
}

console.log(getMaxDiff([-1, -4, -7, 11]));