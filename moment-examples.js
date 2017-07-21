var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));   // unix timestamp in seconds STRING
console.log(now.format('x'));   // unix timestamp in milliseconds STRING

console.log(now.valueOf());  // unix timestamp in milliseconds number

var timestamp = 1500601906623;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.format());
console.log(timestampMoment.local().format('h:mm a'));

console.log(now.format('MMM Do Y, h:mma'));