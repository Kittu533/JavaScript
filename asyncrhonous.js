/*setTimeout Function*/

const { error } = require("console");
const { required } = require("nodemon/lib/config");
const { resolve } = require("path");

// console.log('Selamat datang!');

// setTimeout(() => {
//   console.log('Terima kasih sudah mampir, silakan datang kembali!');
// }, 3000)

// console.log('Ada yang bisa dibantu?');

// || MATERI ASYNCRHONOUS JS ||  \\

/**Asynchronous Handling dengan Callback
 * Asyncrhonous Handling dengan Promise
 * Callback merupakan salah satu implementasi dari konsep High-Order Function yang sudah kita bahas pada modul Functional Programming.
 */
// function getUsers(callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ["John", "Jack", "Abigail"];
//     callback(users);
//   }, 3000);
// }

// getUsers((users) => {
//   console.log(users);
// });
// Proses yang dijalankan secara asynchronous, biasanya berpotensi menghasilkan error
// function getUsers(isOffline, callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ["John", "Jack", "Abigail"];

//     if (isOffline) {
//       callback(new Error("cannot retrieve users due offline"), null);
//       return;
//     }

//     callback(null, users);
//   }, 3000);
// }

// function usersCallback(error, users) {
//   if (error) {
//     console.log("process failed:", error.message);
//     return;
//   }
//   console.log("process success:", users);
// }

// getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
// getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

/**Asyncronous dengan promise */
// function getUsers(isOffline) {
//   // return a promise object
//   return new Promise((resolve, reject) => {

//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];

//       if (isOffline) {
//         reject(new Error('cannot retrieve users due offline'));
//         return;
//       }

//       resolve(users);
//     }, 3000);
//   });
// }

// getUsers(false)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message));

// Mengubah Callback Menjadi Promise dengan Promisify

/**Kuis Koding: Mengubah Fungsi Asynchronous Callback-Based Menjadi Promise-Based*/
/**
 *
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

// const util= require("util");

// function getProvinces(countryId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (countryId === 'id') {
//         resolve([
//           { id: "id-jk", name: "Jakarta" },
//           { id: "id-bt", name: "Banten" },
//           { id: "id-jr", name: "Jawa Barat" },
//         ]);
//       } else {
//         reject(new Error("Country not found"));
//       }
//     },1000);
//   });
// }

// module.exports = { getProvinces };

// getProvinces('id')
//   .then(provinces => {
//     console.log('Provinces:', provinces);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });
 
// Asynchronous Handling dengan Sintaks Async dan Await

async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);
 
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
 
watchMovie().then(() => console.log('done'));