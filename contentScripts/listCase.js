var state = localStorage.getItem("toRun");
if (state == 1){	
    var caseNumber = document.getElementsByClassName("x-grid3-td-CASES_CASE_NUMBER"); 
    var caseLink = caseNumber[1].getElementsByTagName("a");  
    localStorage.setItem("runTime", "Start");
    caseLink[0].click();
}