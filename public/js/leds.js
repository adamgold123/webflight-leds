// leds.js

(function(window, document, $, undefined) {
    'use strict';
    var Leds = function Leds(cockpit) {
        console.log("Loading leds plugin.");
        this.cockpit = cockpit;

        var mymenu = '<select id="ledAnimations">'
        mymenu += '<option value="blinkGreenRed">blinkGreenRed</option>'
        mymenu += '<option value="blinkGreen">blinkGreen</option>'
        mymenu += '<option value="blinkRed">blinkRed</option>'
        mymenu += '<option value="blinkOrange">blinkOrange</option>'
        mymenu += '<option value="fire">fire</option>'
        mymenu += '<option value="standard">standard</option>'
        mymenu += '<option value="red">red</option>'
        mymenu += '<option value="green">green</option>'
        mymenu += '<option value="redSnake">redSnake</option>'
        mymenu += '<option value="blank">blank</option>'
        mymenu += '<option value="rightMissile">rightMissile</option>'
        mymenu += '<option value="leftMissile">leftMissile</option>'
        mymenu += '<option value="doubleMissile">doubleMissile</option>'
        mymenu += '<option value="frontLeftGreenOthersRed">frontLeftGreenOthersRed</option>'
        mymenu += '<option value="frontRightGreenOthersRed">frontRightGreenOthersRed</option>'
        mymenu += '<option value="rearRightGreenOthersRed">rearRightGreenOthersRed</option>'
        mymenu += '<option value="rearLeftGreenOthersRed">rearLeftGreenOthersRed</option>'
        mymenu += '<option value="leftGreenRightRed">leftGreenRightRed</option>'
        mymenu += '<option value="leftRedRightGreen">leftRedRightGreen</option>'
        mymenu += '<option value="blinkStandard">blinkStandard</option>'
        mymenu += '</select>';

        $("#controls").prepend(' duration: <input id="duration" size="3" placeholder="3"/>');
        $("#controls").prepend(' hz: <input id="hz" size="3" placeholder="2"/>');
        $("#controls").prepend(mymenu);
        $("#controls").prepend('<button id="animateLeds">animateLeds</button>');

        this.listen();
    };

    Leds.prototype.listen = function listen() {
        var leds = this;

        $('#animateLeds').click(function(ev) {
            ev.preventDefault();
            var name = $("#ledAnimations").val() || "redSnake";
            var hz = $("#hz").val() || 2;
            var duration = $("#duration").val() || 3;
            leds.animateLeds(name, hz, duration);
        });

    };

    Leds.prototype.animateLeds = function config(name, hz, duration) {

        this.cockpit.socket.emit("/leds/animateLeds", {
            name: name,
            hz: hz,
            duration: duration
        });
    };

    window.Cockpit.plugins.push(Leds);

}(window, document, jQuery));
