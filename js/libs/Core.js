(function () {
    'use strict';
    define(["jquery"], function () {
        /**
         * CORE
         */
        function Core() {
            var data = {};
            this.getData = function () {
                return data;
            };
            this.setData = function (newData) {
                data = newData;
            };
            this.init = function () {
                console.log('core init', "libs/Popin");
                require(["libs/Popin"], function (Popin) {
                    window.Ptah.Popin = Popin;
                    console.log('require callback', Popin);
                    var about = new Popin('toto');
                    about.create();
                });
            };
        }
        return Core;
    });
}());