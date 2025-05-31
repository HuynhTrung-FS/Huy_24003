// toán tử cơ bản
// string, number, boolean
// phép toán cộng số học
// number + number
1 + 2; // 3

// number + string , number + boolean (ưu tiên string)
1 + "1"; // String(1) + '1' -> '11'
true + 1; // Number(true) + 1 -> 1 + 1 -> 2

// boolean + boolean
true + true; // Number(true) + Number(true) -> 1 + 1 -> 2
true + false; // Number(true) + Number(false) -> 1 + 0 -> 1

// Phép nối chuối :
// string + string
"1" + "1"; // '1' + '1' -> '11'
"Let" + "Div"; // 'Let' + 'Div' -> 'LetDiv'
// string + number
"Let" + 1; // 'Let' + 1 -> 'Let1'
1 + "Let"; // 1 + 'Let' -> '1Let'
// string + boolean
console.log("Let" + true); // String('Let') + String(true) =>'Let' + 'true' -> 'Lettrue'

// Phép trừ:
// number - number:
1 - 2; // 1 - 2 -> -1
// number - khác number( string, boolean) (ưu tiên number)
1 - "2"; // 1 - Number('2') -> -1

// Toán tử nhân và chia
var number1 = 30;
var number2 = 5;
var result = number1 / number2;
console.log(result); //6
var result = number1 * number2;
console.log(result); //150

// ++, --
var number = 1;
number++; // number +=1 || number = number + 1
number--; // number -= 1 || number = number - 1

// % (mod)
var number = 10;
var result = number % 3;
console.log(result); // 1

// Toán tử gán
var number = 10;
number += 5;
number -= 5;
number *= 5;
number /= 5;
number %= 5; // number = number % 5
console.log(result); //15

// Equality operator: ... == ...: so sanh theo gia tri (mac ke kieu du lieu)
10 = 20; // false
"1" == "1"; // true
"1" == 1; // true

true == 1; // true
false == 0; // true

null == undefined; // true
NaN == NaN; // false (NaN sẽ không bằng với bất kì giá trị nào, kể cả chính nó)

// strict Equality operator: ... === ...: so sanh theo gia tri va kieu du lieu
"1" === 1; // false
1 === 1; // true
true === 1; // false

// inequality operator: ... != ...: so sanh theo gia tri (mac ke kieu du lieu)
1 != "1"; // false
NaN != NaN; // true

// strict inequality operator: ... !== ...: so sanh theo gia tri va kieu du lieu 
1 !== '1'; // true
1 !== 1; // false

// >, <, >=, <=

// logical operator: &&, ||, !
&& : true && true -> true, // (tất cả trường hợp còn lại thì false)
|| : false|| false -> false, // (tất cả trường hợp còn lại thì true)

var age = 20;
var canDrive = true;
console.log(age < 18 && canDrive); //false

// ! (Not)
var a = true;
var b = false;
console.log(!a);   // false
console.log(!b);   // true

// Ternary Operator
var age = 20;
var canDrive = age >= 18 ? true : false;

// thứ tự ưu tiên, 6 * 2 /3, () -> *, / -> toán tử so sánh (<, >) -> +, - -> phép gán
var a = b = 10 + (5-2) /6 *2 > 100;