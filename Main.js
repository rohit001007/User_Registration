var readlineSync = require('readline-sync');
const utility = require("./Utility");

var fName = readlineSync.question(`\n * Enter First name : `)
utility.firstName(fName);