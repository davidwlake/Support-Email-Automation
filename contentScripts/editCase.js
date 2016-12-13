var caseContact1 = localStorage.getItem("caseContact");
var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("click", true, true); 

document.getElementById('cas4').value = localStorage.getItem("accountName");
document.getElementById('CF00N32000002wcXT').value = localStorage.getItem("serviceAccount");
   
if (caseContact1.includes("Internal")) {
    document.getElementById("cas11").value = "Internal";
    document.getElementById("00N60000002yJIX").value = localStorage.getItem("email");
} else {
    document.getElementById('cas3').value = caseContact1;
    document.getElementById('cas3_lkwgt').dispatchEvent(changeEvent);
}
if (caseContact1.includes("Issue")) {
    document.getElementById("cas5").value = "Issue";
}
if (caseContact1.includes("How Do I")) {
    document.getElementById("cas5").value = "How Do I";
}

 