// //Bài 1
// var celsius = parseFloat(prompt("Nhập °C"));
// var fahrenheit = (celsius * 9) / 5 + 32;

// console.log(`${celsius}°C = ${fahrenheit}°F`);

// //Bài 2
// var met = parseFloat(prompt("Nhập mét"));
// var feet = met * 3.2808;

// console.log(`${met}m = ${feet}ft`);

// //Bài 3
// do var a = parseFloat(prompt("Nhập cạnh a"));
// while (a <= 0);

// var acreage = a * a;

// console.log(`Diện tích hình vuông = ${acreage}`);

// //Bài 4
// do var a = parseFloat(prompt("Nhập cạnh a"));
// while (a <= 0);
// do var b = parseFloat(prompt("Nhập cạnh b"));
// while (b <= 0);

// var acreage = a * b;

// console.log(`Diện tích hình chữ nhật = ${acreage}`);

// //Bài 5
// do var a = parseFloat(prompt("Nhập độ dài cạnh kề a:"));
// while (a <= 0);
// do var b = parseFloat(prompt("Nhập độ dài cạnh kề b:"));
// while (a <= 0);

// var acreage = (a * b) / 2;

// console.log(`Diện tích tam giác vuông = ${acreage}`);

// //Bài 6
// var a = parseFloat(prompt("Nhập hệ số a:"));
// var b = parseFloat(prompt("Nhập hệ số b:"));

// if (a === 0) {
//   if (b === 0) {
//     console.log("Phương trình có vô số nghiệm.");
//   } else {
//     console.log("Phương trình vô nghiệm.");
//   }
// } else {
//   var x = -b / a;
//   console.log("Nghiệm của phương trình là x =", x);
// }

//Bài 7
// var a = parseFloat(prompt("Nhập hệ số a:"));
// var b = parseFloat(prompt("Nhập hệ số b:"));
// var c = parseFloat(prompt("Nhập hệ số c:"));

// var delta = b * b - 4 * a * c;

// if (delta > 0) {
//   var x1 = (-b + Math.sqrt(delta)) / (2 * a);
//   var x2 = (-b - Math.sqrt(delta)) / (2 * a);
//   console.log("Nghiệm thứ nhất (x1) =", x1);
//   console.log("Nghiệm thứ hai (x2) =", x2);
// } else if (delta === 0) {
//   var x = -b / (2 * a);
//   console.log("Phương trình có nghiệm kép x =", x);
// } else {
//   console.log("Phương trình vô nghiệm.");
// }

// //Bài 8
// do var age = prompt("Nhập tuổi");
// while (!Number.isInteger(parseFloat(age)));

// if (age > 0 && age < 120) {
//   console.log("Là tuổi con người");
// } else {
//   console.log("Không phải Là tuổi con người");
// }

//Bài 9
// do var a = parseFloat(prompt("Nhập cạnh a"));
// while (a <= 0);
// do var b = parseFloat(prompt("Nhập cạnh b"));
// while (b <= 0);
// do var c = parseFloat(prompt("Nhập cạnh c"));
// while (c <= 0);

// if (a + b > c && a + c > b && b + c > a) {
//   console.log("a, b, và c là các cạnh của một tam giác.");
// } else {
//   console.log("a, b, và c không phải là các cạnh của một tam giác.");
// }

//Bài 10
// do var kWhConsumed = parseFloat(prompt("Nhập số kWh tiêu thụ:"));
// while (kWhConsumed < 0);

// var pricePerUnit = 1500; // Giá cước mỗi kWh
// var basicFee = 5000; // Phí cơ bản

// var totalAmount = basicFee + kWhConsumed * pricePerUnit;

// console.log(`Số tiền điện cần thanh toán: ${totalAmount} đồng`);

//Bài 11
// var income = parseFloat(prompt("Nhập số thu nhập cá nhân:"));

// var taxRates = [
//   { upperLimit: 5000, rate: 0 },
//   { upperLimit: 10000, rate: 0.1 },
//   { upperLimit: 20000, rate: 0.15 },
//   { upperLimit: 30000, rate: 0.2 },
//   { upperLimit: Infinity, rate: 0.25 },
// ];

// var tax = 0;

// for (var i = 0; i < taxRates.length; i++) {
//   if (income <= taxRates[i].upperLimit) {
//     tax += income * taxRates[i].rate;
//     break;
//   } else {
//     tax += taxRates[i].upperLimit * taxRates[i].rate;
//     income -= taxRates[i].upperLimit;
//     console.log(tax);
//   }
// }

// console.log(`Số thuế thu nhập cá nhân cần đóng: ${tax} đồng`);
//Bài 12
// var initialAmount = parseFloat(prompt("Nhập số tiền ban đầu (VND):"));
// var months = parseInt(prompt("Nhập số tháng cho vay:"));
// var monthlyInterestRate = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;

// var totalAmount = initialAmount;

// for (var i = 0; i < months; i++) {
//     totalAmount += totalAmount * monthlyInterestRate;
// }

// var interestEarned = totalAmount - initialAmount;

// console.log("Số tiền lãi sau", months, "tháng:", interestEarned.toFixed(2), "VND");
// console.log("Số tiền cuối cùng sau", months, "tháng:", totalAmount.toFixed(2), "VND");
