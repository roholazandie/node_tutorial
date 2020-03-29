console.log(__filename);
console.log(__dirname);
const EventEmitter = require('events');

var url = "http://mylogger.com/log";

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
        //raise an event
        this.emit('messagelogged', {id:1, url: "http:"})
    }

}


//module.exports.log = log;
//module.exports.url = url;

module.exports = Logger;