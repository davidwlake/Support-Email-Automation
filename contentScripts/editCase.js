var state = localStorage.getItem("toRun");
if (state == 1){	
var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("click", true, true); 
var saveButton = document.getElementById('topButtonRow').getElementsByClassName("btn")[0];

document.getElementById('cas4').value = localStorage.getItem("accountName");
document.getElementById('CF00N32000002wcXT').value = localStorage.getItem("serviceAccount");
document.getElementById('00N32000002wz4U').value = localStorage.getItem("additionalAcounts");
document.getElementById('cas4_lkwgt').click();

setTimeout(function(){    
if (localStorage.getItem("internal").includes("Internal") || localStorage.getItem("internal").includes("Internal")) {
    document.getElementById("cas11").value = "Internal";
    document.getElementById("00N60000002yJIX").value = localStorage.getItem("contactEmail");
    if (localStorage.getItem("internal").includes("Issue")) {
        document.getElementById("cas5").value = "Issue";
    }
    if (localStorage.getItem("internal").includes("How Do I")) {
        document.getElementById("cas5").value = "How Do I";
    }
    saveButton.click();
} else {
    document.getElementById('cas3').value = localStorage.getItem("caseContact");
    document.getElementById('cas3_lkwgt').click();
    setTimeout(function(){ saveButton.click(); }, 1000);

}
}, 2000);
    
localStorage.setItem("runTime", "Second");

}