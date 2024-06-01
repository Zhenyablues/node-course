import EventEmitter from 'events';

const myEmiter = new EventEmitter();

const timeoutListenerFn = (secondsQty) =>
    console.log(`Timeout event! ${secondsQty}`);

myEmiter.on('timeout', timeoutListenerFn);

setTimeout(() => myEmiter.emit('timeout', 1), 1000);
setTimeout(() => myEmiter.emit('timeout', 3), 2000);

myEmiter.once('singleEvent', () => {
    console.log('Single event occured');
});

// Listener function will be called only once!
setTimeout(() => myEmiter.emit('singleEvent'), 500);
setTimeout(() => myEmiter.emit('singleEvent'), 1500);

// Remove listener from the ''timeout event
setTimeout(() => myEmiter.off('timeout', timeoutListenerFn), 3000);
setTimeout(() => myEmiter.emit('timeout', 3), 4000);
