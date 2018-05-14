(function (window, document, drawModule, undefined) {

    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        drawModule.init();
    });

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

    }


})(window, document, drawModule);
