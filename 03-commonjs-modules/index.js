const { myName, myHobby, myFavouriteNumber } = require('./multiple-exports');
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');
// Don't use absolute paths
// const greetingFn = require('D:/урокиПрограмування/Node/node-course/03-commonjs-modules/single-export');

// Import from multiple-exports
console.log(myName);
console.log(myHobby);
console.log(myFavouriteNumber);

myHobby.push('climbing');

// Import from single-export
console.log(greetingFn);
greetingFn(myName);

// Import from export-and-import
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
