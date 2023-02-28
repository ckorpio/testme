console.log('This is a demo...\n\n');

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Bind event and event  handler as follows
eventEmitter.on('eventName', eventHandler);

// Create an event handler as follows
function eventHandler() {
    console.log('Handler triggered succesfully.');
}

// Fire an event 
eventEmitter.emit('eventName');

console.log('\nThat is all\n');
