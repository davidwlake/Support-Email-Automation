var i,x,table = [];
var parm = "pv0=";
temp = document.getElementsByClassName("reportTable tabularReportTable")[0].rows;

for(i = 1; i < (temp.length - 2); i++){
        if (!table[i-1]) {                 
        table[i-1] = [];              
    }
    for(x = 0; x < temp[i].cells.length; x++){
 
        table[i-1][x] = temp[i].cells[x].innerText;
    }
}

chrome.storage.local.set({"buffer2": table}, function() {
    window.close();
}); 

