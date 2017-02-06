localStorage.setItem("runTime", "W2C"); 
localStorage.setItem("W2CCaseURL", document.URL);
localStorage.setItem("internal", "Internal");
var buffer = document.getElementById('cas15_ileinner').innerText;  
    buffer = buffer.split("\n");
    var i = indexofNextLine(buffer, -1); //index 
buffer[i] = buffer[i].replace(">", "");
localStorage.setItem("caseContact", buffer[i].split("<")[0]);
localStorage.setItem("firstName", buffer[i].split("<")[0].split(" ")[0]);
localStorage.setItem("contactEmail", buffer[i].split("<")[1]);


//Website
i = indexofNextLine(buffer, i);

localStorage.setItem("W2CWebsite", buffer[i]);

// TEMP LINE: 
 buffer[i] = "www.subaruvt.com";

var url = "https://dealertrack-production.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=001&sen=003&sen=00T&sen=005&sen=00U&sen=500&sen=a6R&sen=00O&str=http%3A%2F%2F"+ buffer[i] +"&initialViewMode=detail&fen=001&collapse=1";


i = indexofNextLine(buffer, i);



window.location.href = url;

function indexofNextLine(rawData, currentIndex){
    i = currentIndex + 1;
    patt1 = /\w/g;
    while(!(rawData[i].match(patt1))){
        i++;
    }
    return i;
}

