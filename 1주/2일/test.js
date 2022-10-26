const Person = (name) => {
  const printName = () => console.log(name);
  return { printName };
};

const person = Person("Daniel");
person.printName();

function printName(name) {
  console.log("name: ", name);
}

console.log(printName === person.printName);

function findMin(...rest) {
  return rest.reduce((a, b) => (a < b ? a : b));
}
console.log(findMin(7, 3, 5, 2, 4, 1)); // 1

function sumArray(sum, arr) {
  if (arr.length === 0) return sum;
  const [head, ...tail] = arr;
  return sumArray(sum + head, tail);
}
console.log(sumArray(0, [1, 2, 3, 4, 5]));

const BankAccount = {
  deposit: 0,
  name: "",

  changeName: function (name) {
    // BankAccount의 이름을 바꾸세요.
    this.name = name;
    return;
  },

  saveMoney: function (amount) {
    // amount를 deposit에 더합니다.
    this.deposit += amount;
    return;
  },

  withdrawMoney: function (amount) {
    // amount를 deposit에서 뺍니다.
    this.deposit -= amount;
    return;
  },

  getDeposit: function () {
    // deposit을 리턴합니다.
    return this.deposit;
  },
};

//   export default BankAccount;

const Counter = {
  // Counter 클로저를 작성하세요.
  count: 0,

  getCount: function (count) {
    return this.count;
  },

  increase: function () {
    this.count += 1;
    return;
  },

  decrease: function () {
    this.count -= 1;
    return;
  },
};

// export default Counter;


let data = [1, 2, 3, 4, 5];
let res = data.filter((e) => e === 2);

console.log(res);