(function(window){
    require.config({
        paths: {
            jquery:    "vendor/jquery",
            bootstrap: "vendor/bootstrap",
            modernizr: "vendor/modernizr",
            plugins:   "vendor/plugins",
            Core:      "libs/Core",
            Popin:     "libs/Popin"
        },
        shim: {
            jquery: {
                exports: '$'
            },
            bootstrap: {
                deps: ['jquery']
            }
        }
    });
    require(["jquery", "Core", "modernizr", "bootstrap", "plugins"],
    function($, Core){
        console.info("REQUIRE callback: ", $, Core);
        'use strict';
        window.Ptah = (window.Ptah) ? window.Ptah : {};
        window.Ptah.UI = new Core();
        $('html').click(function(){window.Ptah.UI.init();});
    });
}(window));