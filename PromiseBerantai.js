//Promise Berantai

// function withDrawMoney(amount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (amount > 100) {
//         reject(new Error("Not enough money to withdraw"));
//       }

//       resolve(amount);
//     }, 1000);
//   });
// }

// function buyCinemaTicket(money) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money < 10) {
//         reject(new Error("not enough money to buy ticket"));
//       }

//       resolve("ticket-1");
//     }, 1000);
//   });
// }

// function goInsideCinema(ticket) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!ticket) {
//         reject(new Error("no ticket"));
//       }

//       resolve("enjoy the movie");
//     }, 1000);
//   });
// }

// function watchMovie() {
//   withDrawMoney(8)
//     .then((money) => {
//       return buyCinemaTicket(money);
//     })
//     .then((ticket) => {
//       return goInsideCinema(ticket);
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// }

// watchMovie();

//Promise Static Method

// promise.all
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// ); // [1, 2, 3] setelah 3 detik

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error.message)); // ups

// promise.race

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.race([promise1, promise2, promise3])
//   .then((value) => console.log(value)); // 1 setelah 1 detik

// const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.race([promise1, promise2, promise3])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error.message)); // Ups

// promise.allSettled

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.allSettled([promise1, promise2, promise3])
//  .then((results) => console.log(results));
// promise.any
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected