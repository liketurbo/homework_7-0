const emitter = {
  on(event, handler) {
    // TODO: подписать
    this.events = this.events || {};
    this.events[event] = this.events[event] || [];
    this.events[event].push(handler);
  },

  off(event, handler) {
    // TODO: отписать
    this.events = this.events || {};
    this.events[event].splice(this.events[event].indexOf(handler), 1);
  },

  emit(event) {
    // TODO: обработка события
    this.events = this.events || {};
    this.events[event].forEach(handler => handler.call(this));
  },
};

const handler = () => {
  // что-то делаем
  // eslint-disable-next-line
  console.log('Hello World!');
};

// подписали
emitter.on('event', handler);
// обработали событие
emitter.emit('event');
// отписали
emitter.off('event', handler);
