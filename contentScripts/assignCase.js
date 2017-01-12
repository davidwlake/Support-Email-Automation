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
