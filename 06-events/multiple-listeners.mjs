import EventEmitter from 'events';

const myEmiter = new EventEmitter();

myEmiter.on('myEvent', () => {
    console.log('First event Listener');
});

myEmiter.on('myEvent', () => {
    console.log('Second event Listener');
});

myEmiter.on('otherEvent', () => console.log('Other event'));

myEmiter.setMaxListeners(25);
console.log(myEmiter.getMaxListeners());
console.log(myEmiter.eventNames());

setTimeout(() => myEmiter.emit('myEvent'), 1000);
