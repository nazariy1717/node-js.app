
let evt = require('events'); //Пдіключаємо івенти

let emitter = new evt.EventEmitter();


emitter.on('event',function(){
    console.log('Listener 1');
});
emitter.on('event',function(){
    console.log('Listener 2');
});
emitter.on('event',function(){
    console.log('Listener 3');
});


emitter.prependListener('event',function(){  // вивід першим
    console.log('1');
});

// emitter.removeListener('event',test);
// emitter.removeAllListeners('event');


emitter.emit('event'); //генеруємо подію event