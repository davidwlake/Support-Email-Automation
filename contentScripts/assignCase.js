var state = localStorage.getItem("toRun");
if (state == 1 && localStorage.getItem("runTime").includes("assign")){	
setTimeout(function(){ 
var changeEvent = document.createEvent("HTMLEvents");
changeEvent.initEvent("change", true, true); 
document.getElementById('newOwn_mlktp').value = "case_queue";
localStorage.setItem("runTime", "Third");
document.getElementById('newOwn_mlktp').dispatchEvent(changeEvent, setTimeout(function(){ 
    var htmlBuffer = document.getElementById("bottomButtonRow");
    var saveButton = htmlBuffer.getElementsByTagName("input");
    document.getElementById('newOwn').value = "DDC-Support Ford Elite Plus";
    saveButton[0].click();
}, 500));
},500);
}
