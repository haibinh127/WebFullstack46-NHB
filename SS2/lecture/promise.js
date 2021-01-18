// // Ban đầu khi chưa gọi resolve và reject thì trạng thái của promise là pending
// var promise_pending = new Promise((resolve, reject) => {

// })
// console.log("Trạng thái Promise ban đầu :", promise_pending);

// // Khi resolve đc gọi thì trạng thái của promise là fullfilled
// var promise_fulfilled = new Promise((resolve, reject) => {
//     resolve();
// })
// console.log("Trạng thái Promise khi resolve :", promise_fulfilled);
// // Khi reject đc gọi thì trạng thái của promise là reject
// // Nếu reject phải sử dụng catch để bắt lỗi, nếu không browser sẽ tự catch lỗi và bắn ra log
// var promise_reject = new Promise((resolve, reject) => {
//     reject("Xảy ra lỗi");
// })
// console.log("Trạng thái Promise khi reject :", promise_reject);

var promise_method2 = new Promise((resolve, reject) => {
    const arrayCourse = [
        {
            "Course name": "Binh",
            "Price": 20,
        },
        {
            "Course name": "Lap trinh vien",
            "Price": 200000000
        }
    ]
    // resolve(arrayCourse);
    reject(arrayCourse);
});
// promise_method2.then(function (data) {
//     console.log(data);
// });
promise_method2.catch(function () {
    // console.log("Promise method then called when reject called: ", 'failure');
})
