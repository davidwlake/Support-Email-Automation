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

 for(i = 0; i < table.length - 1; i++){
     if(table[i][2]){
        parm += table[i][2] + ",";
     }
 }
var url = "https://dealertrack-production.my.salesforce.com/00O32000004pn9E?" + parm;

chrome.storage.local.set({'buffer1': table}, function() {
          window.open(url, "_self");
});
