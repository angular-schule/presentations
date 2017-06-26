// similar to the handsOn-hack, but makes a div fullscreen
//
// required:
// 1. some div, with class="fullscreen"
(function () {

    // add divs to DOM
    var s = '<div id="fullscreenMaster"'
        + 'style="display:none;position:absolute;padding:0;top:0;left:0;width:100%px;height:100%;z-index:31;">'
        + '</div>';

    var div = document.createElement('div');
    div.innerHTML = s;
    var elements = div.firstChild;
    document.body.appendChild(elements);


    var fullscreenMaster = document.getElementById("fullscreenMaster");
    var reveal = document.getElementById("reveal");

    var handleEvents = function (event) {

        var currentSlide = event.currentSlide;

        var fullscreenNode;
        for (var i = 0; i < currentSlide.childNodes.length; i++) {
            if (currentSlide.childNodes[i].className == "fullscreen") {
                fullscreenNode = currentSlide.childNodes[i];
                fullscreenNode.style.display = "none";
                break;
            }
        }

        if (fullscreenNode) {
            fullscreenMaster.style.display = "block";
            fullscreenMaster.innerHTML = fullscreenNode.innerHTML;
        } else {
            fullscreenMaster.style.display = "none";
        }
    }

    Reveal.addEventListener('slidechanged', handleEvents);
    Reveal.addEventListener('ready', handleEvents);
})();
