!function(){var t={colorBody:document.body,btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),timerId:null};t.btnStart.addEventListener("click",(function(n){t.btnStart.disabled=!0,t.timerId=setInterval((function(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.colorBody.style.backgroundColor="".concat(n)}),1e3)})),t.btnStop.addEventListener("click",(function(n){clearInterval(t.timerId),t.btnStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.03bdea2f.js.map
