const path = require('path');
const os = require('os');
const fs = require('fs');
//const EventEmitter = require('events');
const Logger = require('./logger');

//console.log(logger);
logger = new Logger();
logger.log("this is the first message");


var pathObject = path.parse(__filename);

console.log(pathObject);

var freeMem = os.freemem();
console.log(freeMem);
//console.log(os.totalmem());

console.log(`Total memoy: ${os.totalmem()}`);


var files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function (err,files) {
if (err){
    console.log(err);
}else {
    console.log(files);
}
});


// const emitter = new EventEmitter();
//
// // 1. register a listener
// emitter.on('messagelogged',function (arg) {
// console.log(`the id is ${arg['id']}`);
// });
//
// // 2. Raise and event
// emitter.emit('messagelogged', {'id':5, 'url': 'http://www.google.com'});


/////////////////////////

logger = new Logger();
logger.on('messagelogged', function (args) {
 console.log(`id is ${args.id}`)
});

logger.log("hahahah");