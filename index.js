function leds(name, deps) {
    deps.client.on('navdata', function(data) {
        //console.log(JSON.stringify(data, null, 4));
    });
    deps.io.sockets.on('connection', function(socket) {
        console.log('connection')
        socket.on('/leds/animateLeds', function(params) {
            console.log("animateLeds", params);
           // deps.client.animateLeds(name,hz,duration);
        });

    });
};

module.exports = leds;
