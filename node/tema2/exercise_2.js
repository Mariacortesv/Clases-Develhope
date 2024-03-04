//escribir en terminal
const crypto = require('crypto');

//random id con method
const randomBytes = crypto.randomBytes(8).toString('hex');
console.log(randomBytes);
