var readlineSync = require('readline-sync');
const utility = require("./Utility");

var fName = readlineSync.question(`\n * Enter First name : `)
utility.firstName(fName);

var lName = readlineSync.question(`\n * Enter Last name : `)
utility.lastName(lName);