var moment = require('moment');
var math = require('mathjs');


console.log('hello');

console.log(moment().format('llll'));

math.sqrt(-4);
console.log(math.sqrt(-4));

var name =  "Sbob";
var last =  "Kergerg";

console.log(`${name} ${last}`);

var firstName =  "Mary";
var lastName =  "Carrick";

console.log(`${firstName} ${lastName}`);


var bob = {
  _name: "Bob",
  _friends: ["joe", "sean"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

console.log(bob.printFriends());

