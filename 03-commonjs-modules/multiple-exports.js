const myName = 'John';
const myHobby = ['swimming', 'boxing', 'cycling'];
const myFavouriteNumber = 77;

console.log('Text from the multiple-exports CommonJS module');
// module.exports === exports!
exports.myName = myName;
exports.myHobby = myHobby;
exports.myFavouriteNumber = myFavouriteNumber;
