// // let a = [45, 4, 9];
// // function mapDemo(myFunction) {
// //     let b = [];
// //     for (let i = 0; i < a.length; i++) {
// //         let k = myFunction(a[i], i, a);
// //         b.push(k);
// //     }
// //     return b;
// // }

// // function myFunction(value, index, array) {
// //     console.log(value, index, array);
// //     return value * 2;
// // }

// // // mapDemo(myFunction);
// // let helloBao = (t) => {
// //     console.log('a');
// //     t();
// // }
// // let helloTien = () => console.log('hello TIen');
// // helloBao(helloTien);
// // const demo = () => {
// //     let dem = 0;
// //     const tang = () => {
// //         dem++;
// //         return dem;
// //     }
// //     console.log(tang());
// //     console.log(tang());
// //     console.log(tang());
// // }

// // demo();
// // const test = () => {
// //     console.log('hello');
// //     const con = () => {
// //         console.log('con');
// //         return 5;
// //     }
// //     return con;
// // }
// // const k = test();
// // // console.log(k());

// const readline = require('readline-sync');

// const checkingResult = {
//     valid: 1,
//     typeError: 2,
//     validationError: 3,
// }

// class Reactangle {
//     constructor(width = 2, height = 1) {
//         this._width = 2;
//         this._height = 1;

//         if (this.#check(width) == checkingResult.valid)
//             this._width = width;


//         if (this.#check(height) == checkingResult.valid)
//             this._height = height;
//     }

//     #check(side) {
//         if (typeof side == 'number') {
//             if (side > 0) {
//                 return checkingResult.valid;
//             }
//             else {
//                 return checkingResult.validationError;
//             }
//         }
//         else {
//             return checkingResult.typeError;
//         }
//     }

//     get width() {
//         return this._width;
//     }

//     set width(newWidth) {
//         if (this.#check(newWidth) == checkingResult.valid)
//             this._width = newWidth;
//     }

//     get height() {
//         return this._height;
//     }

//     set height(newHeight) {
//         if (this.#check(newHeight) == checkingResult.valid)
//             this._height = newHeight;
//     }

//     #scanSide(message) {
//         let retype;
//         let side;
//         do {
//             side = readline.question(message);
//             const res = this.#check(side);
//             if (res == checkingResult.valid) {
//                 retype = false;
//             }
//             else {
//                 if (res == checkingResult.typeError) {
//                     console.log("Bạn đang nhập một giá trị không phải là số. Vui lòng nhập một số dương.");
//                 }
//                 else if (res == checkingResult.validationError) {
//                     console.log("Bạn đang nhập một số không dương. Vui lòng nhập một số dương.")
//                 }
//                 retype = Number(readline.question("Bạn có muốn nhập lại không? (1-Có, 0-Không): "));
//                 console.log(retype);
//             }
//         } while (retype);
//         return side;
//     }
//     scan() {
//         this.width = this.#scanSide("Nhập chiều dài: ");
//         this.height = this.#scanSide("Nhập chiều rộng: ");
//     }

//     print() {
//         console.log(`Hình chữ nhật: ${this.width} x ${this.height}`);
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// module.exports = Reactangle;

// function phatDeThi() {
//     console.log("Phat de thi");
//   }
  
//   function canhThi() {
//     console.log("Canh thi");
//     setTimeout(function () {
//     }, 3000);
// }
// function hetThoiGian() {
//       console.log("Het thoi gian lam bai");
//       setTimeout(function () {
//           console.log("Thu bai");
//       }, 3000);
//   }
  
  
//   phatDeThi();
//   canhThi();
//  hetThoiGian();

//  function phatDeThi() {
//     console.log("Phat de thi");
//   }
  
//   function canhThi(callBackFn) {
//     console.log(`canh thi`);
//     setTimeout(() => {
//         console.log("het thoi gian");
//         callBackFn();
//     },3000)
// }

//   function thuBai() {
//     console.log("Thu bai");
//   }
  
//   phatDeThi();
//   canhThi(thuBai);

// function phatDeThi() {
//     console.log("Phat de thi");
//   }
  
// function canhThi() {
//     console.log("Canh thi");
//     return new Promise((resolve,reject) => {
//         setTimeout(function () {
//             console.log("Het thoi gian lam bai");
//             resolve() 
//         }, 1000); 
//     });
//   }
  
//   function thuBai() {
//     console.log("Thu bai");
//   }
  
//   phatDeThi();
//   canhThi().then(() => thuBai());

// let temp = new Promise((resolve, reject) => {
//   let t = prompt(`Nhap nhiet do hom nay: `);
//   resolve(t);
// })

// temp.then((t) => {
//   if (t >= 25 && t <= 27) {
//     console.log(`di choi ngay va luon`);
//   }
//   else console.log(`o nha nhe`);
// })
//temp() co' ngoac. khi ma` no' tra? ve` 1 doi tuong.
//co' () hay không phụ thuộc vào đối tượng gọi .then có phải là 1 Promise không, 
// nếu đã là 1 Promise rồi thì không cần () nữa, còn nếu nó là 1 function mà trong định
// nghĩa function trả về 1 Promise thì mới cần (). 