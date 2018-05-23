(function (window, document, drawModule, undefined) {

    drawModule.init();

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

    }


})(window, document, drawModule);
