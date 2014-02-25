(function () {
    'use strict';
    /**
     * POPINS
     */
    define(function () {
        function Popin() {
            this.create = function () {
                console.info('popin créé');
            };
            this.open =   function () {
                alert('popin ouvert');
            };
            this.close =  function () {
                alert('popin fermé');
            };
        }
        return Popin;
    });
}());