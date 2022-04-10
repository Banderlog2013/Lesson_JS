"use strict";

const p = document.querySelectorAll ('p');
console.log(p);

// динамически загнружаемые скрипты ведут себя как async
// const script = document.createElement('script');
// script.src = "js/test";
// script.async = false;
// document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");