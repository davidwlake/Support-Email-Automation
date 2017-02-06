var state = localStorage.getItem("toRun");
if (state == 1){	

var i = 0;
var dataBuffer = document.getElementsByClassName("dataCell");

for (i = 0; i < dataBuffer.length; i++) {
        if (hasUpperCase(dataBuffer[i].innerText) != true &&
            dataBuffer[i+5].innerText == "Service Account"
           ) {
            localStorage.setItem("serviceAccount", dataBuffer[i].innerText);
            dataBuffer[i].getElementsByTagName("a")[0].click();
            break;
        }
    }
    
}

function hasUpperCase(str) {
    if(str.toLowerCase() != str) {
        return true;
    }
    return false;
}