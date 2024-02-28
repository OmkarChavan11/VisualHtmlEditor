self.onmessage = function(event) {
    const message = event.data;
    console.log('Message received in worker:', message);
    // Echo the message back to the main thread
    self.postMessage(message);
};
