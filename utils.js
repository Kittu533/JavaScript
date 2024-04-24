// function withDrawMoney(amount) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (amount > 100) {
//           reject(new Error('Not enough money to withdraw'))
//         }

//         resolve(amount)
//       }, 1000);
//     });
//   }

//   function buyCinemaTicket(money) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (money < 10) {
//           reject(new Error('not enough money to buy ticket'))
//         }

//         resolve('ticket-1')
//       }, 1000);
//     });
//   }

//   function goInsideCinema(ticket) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (!ticket) {
//           reject(new Error('no ticket'))
//         }

//         resolve('enjoy the movie')
//       }, 1000);
//     });
//   }

//   module.exports = { withDrawMoney, buyCinemaTicket, goInsideCinema };

// KUIS
