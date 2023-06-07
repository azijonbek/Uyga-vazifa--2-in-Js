

// 3-masala
// let str = "catjfnfskd";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str.slice(i, i + 3) === "cat") {
//     count++;
//   }
// }

// console.log(count);


// 2-masala boshqa yo'li
// function sumDigitsDifferentFromOne(num) {
//     let sum = 0;
  
//     while (num > 0) {
//       let digit = num % 10;
//       num = Math.floor(num / 10);
  
//       if (digit !== 1) {
//         sum += digit;
//       }
//     }
  
//     return sum;
//   }

// console.log(sumDigitsDifferentFromOne(123456));
// console.log(sumDigitsDifferentFromOne(111111));
// console.log(sumDigitsDifferentFromOne(987654));

// 2-masala
// let a = 791332
// let b = parseInt((a % 10))
// let c =parseInt((a % 100)/10)
// let d = parseInt((a % 1000)/100)
// let e = parseInt((a % 10000)/1000)
// let f = parseInt((a % 100000)/10000)
// let g = parseInt((a % 1000000)/100000)
// let b2 = (b=== 1)
// let c2 = (c=== 1)
// let d2 = (d=== 1)
// let g2 = (g=== 1)
// let e2 = (e=== 1)
// let f2 = (f=== 1)
// console.log(((b+c+d+e+f+g))-((b2)+(c2)+(d2)+(e2)+(f2)+(g2)))


// 1-masala


// let a = 3
// let b = 4
// let c = 5

// function isPythagorean(a, b, c) {
//   if (a**2 + b**2 === c**2) {
//     return true;
//   } else if (a**2 + c**2 === b**2) {
//     return true;
//   } else if (b**2 + c**2 === a**2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPythagorean(3, 4, 5));
// console.log(isPythagorean(5, 12, 13));
// console.log(isPythagorean(1, 2, 3)); 


//  4-misol
// let son = 9522471
// let nol = parseInt((son / 1000000)) == 1 
// let bir = parseInt((son / 100000)%10) == 1 
// let ikki = parseInt((son / 10000) % 10) == 1
// let uch = parseInt((son / 1000) % 10) == 1
// let tort = parseInt((son / 100) % 10) == 1
// let besh = parseInt((son / 10) % 10) == 1
// let olti = parseInt(son % 10) == 1
// let yig=bir+ikki+uch+tort+besh+olti+nol
// let nol1 = parseInt((son / 1000000)) 
// let bir1 = parseInt((son / 100000)%10)
// let ikki1 = parseInt((son / 10000) % 10)
// let uch1 = parseInt((son / 1000) % 10)
// let tort1 = parseInt((son / 100) % 10)
// let besh1 = parseInt((son / 10) % 10) 
// let olti1 = parseInt(son % 10) 
// console.log((bir1+ikki1+uch1+tort1+besh1+olti1+nol1+yig*3)/7)