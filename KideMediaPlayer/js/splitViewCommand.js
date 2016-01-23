(function () {
    "use strict";

    window.somethingClicked = WinJS.UI.eventHandler(function (ev) {
        var previouslySelected = ev.target.parentElement.querySelector("[isSelected]");
        if (null !== previouslySelected) {
            previouslySelected.removeAttribute("isSelected");
        }
        ev.target.setAttribute("isSelected");
    });

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("#app .nav-commands > div")[0].setAttribute("isSelected")
    });

})();