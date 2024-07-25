// Task 1
// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

let func1 = (array1) => {
  let accumulator = 0;

  array1.forEach((item) => (accumulator += item));
  return accumulator;
};

let sum = func1([10, 50, 6, 7, 8, 11, 6, 3, 9]);
console.log(sum);

// Task 2
// let user = {
// firstname: 'giorgi',
// lastname: 'saakadze',
// age: 32,
// isloggedin: true
// }
// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით
// (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

let loggedInUser = () => {
  let conditionResult =
    user.isloggedin == true ? `${user.firstname} ${user.lastname}` : `false`;
  return conditionResult;
};
console.log(loggedInUser());

// Task 3
// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი.
// ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური

let maxNumber = (array) => Math.max(...array);

let result = maxNumber([1, 2, 78, 3]);
console.log(result);

// Task 4
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი;
// თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘

let oddOrEven = (num) => {
  let result2 = num % 2 == 0 ? "this number is even" : "this number is odd";
  return result2;
};
console.log(oddOrEven(99));

// Task 5
// მოცემულია მასივი:
// let array = [1,2,3,4,5];
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}
console.log(reversedArray);

// Task 6
// ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და
// დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი,
// თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი.
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let userAge = (num) => {
  let result3 = num >= 18 ? "სრულწოვანი" : "არასრულწოვანი";
  return result3;
};
console.log(userAge(21));

// Task 7
// მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] == 5) {
    console.log("არის");
    break;
  }
}

// Task 8
// მოცემულია მასივი:
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3 = [1, 2, 3, 4, 5];
let accumulator = 0;

array3.forEach((item) => {
  accumulator += item;
});

console.log(accumulator);

// Task 9
// მოცემულია მასივი
// let array4= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამიგავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 4, 5];
let total = 0;

array4.forEach((item) => {
  total += item;
});

let mean = total / array4.length;
console.log(mean);

// Task 10
// მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
// let array5 = [1, 2, 3, 7, 6, 9];

let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
  if (array5[i] == 7) continue;
  else console.log(array5[i]);
}

// Task 11
// Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
// let array5 = [32, 14, null, ‘40’, 50,];

let array6 = [32, 14, null, "40", 50];

array6.forEach((item) => {
  typeof item === "number" && item % 5 === 0 ? console.log(item) : null;
});

// Task 12
// Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
// Let array8 = [ [2, -3, 5, 11], [1, -35, –11], [12, -36, -24] ];

let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

singleArray = array8.reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

singleArray.forEach((item) => {
  item > 0 ? console.log(item) : null;
});
