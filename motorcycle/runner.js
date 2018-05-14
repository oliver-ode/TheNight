var drawModule = (function () {

    var paint = function () {

    }


    var init = function () {
        gameloop = setInterval(paint, 80);
    }


    return {
        init: init
    };


}());
