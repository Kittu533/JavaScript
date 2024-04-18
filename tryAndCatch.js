/** THWROWING EROR */
// const json = '{ "name": "Yoga","age": 20 }';

// try {
//   const user = JSON.parse(json);

//   if (!user.name || !user.age) {
//     throw new SyntaxError("'name OR age' is required.");
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log(`JSON Error: ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log(error.message);
//   } else {
//     console.log(error.stack);
//   }
// }

//====================================================//

/**
 * CUSTOM EROR
 * Membuat kita mengetahui letak erornya
 */

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// const json = '{ "age": 30 }';

// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new ValidationError("'name' is required.");
//   }
//   if (!user.age) {
//     throw new ValidationError("'age' is required.");
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log(`JSON Syntax Error: ${error.message}`);
//   } else if (error instanceof ValidationError) {
//     console.log(`Invalid data: ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log(error.message);
//   } else {
//     console.log(error.stack);
//   }
// }

//--------------------------------------------------||
/** KUIS PENANGGANAN EROR */
//--------------------------------------------------||

/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */

// TODO 1
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}
// TODO 2
const validateNumberInput =(a1, b1, c1) => {
  if (typeof a1 !== "number") {
    throw new ValidationError("Argumen pertama harus number");
  }
  if (typeof b1 !== "number") {
    throw new ValidationError("Argumen kedua harus number");
  }
  if (typeof c1 !== "number") {
    throw new ValidationError("Argumen ketiga harus number");
  }
}
const detectTriangle = (a, b, c) => {
  // TODO 3

  try {
    validateNumberInput(a, b, c);

    if (a === b && b === c) {
      return "Segitiga sama sisi";
    }

    if (a === b || a === c || b === c) {
      return "Segitiga sama kaki";
    }

    return "Segitiga sembarang";
  } catch (error) {
    return error.message;
  }
};

console.log(detectTriangle(3, 3, "sd"));
console.log(detectTriangle(1, false, 1));

console.log(detectTriangle("a", 3, 5));

console.log(detectTriangle(12, 2, null));
