var state = localStorage.getItem("toRun");
if (state == 1){	
var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("click", true, true);
var retVal = prompt("Case Number: ");
localStorage.setItem("caseNumber", retVal);

document.getElementById('phSearchInput').value = retVal, setTimeout(function(){  
        document.getElementById('phSearchButton').dispatchEvent(changeEvent);
        }, 500);
localStorage.setItem("runTime", "Start");
}