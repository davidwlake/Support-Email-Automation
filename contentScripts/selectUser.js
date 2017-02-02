///////////////////////////////////
//Authors: David Lake & Patrick Murphy
//
//Last Modified: 12.20.16 David Lake
//
////////////////////////////////////

var state = localStorage.getItem("toRun");
if( state == 1){
window.onload = function () {
// Variable Initialization   
	var dataBuffer = window.frames[1].document.getElementsByClassName(" dataCell "), i = 0;
	var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("click", true, true);
	
// Returns size of an array of objects
	Object.size = function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
	};
	

// Select Contact if Contact Name, Parent Name, Email Address
	for (i = 0; i < dataBuffer.length; i++) {
        if(doesMatch(dataBuffer[i].innerText,localStorage.getItem("caseContact")) && doesMatch(dataBuffer[i+3].innerText, localStorage.getItem("accountName")) && doesMatch(dataBuffer[i+8].innerText,localStorage.getItem("contactEmail"))) {
            dataBuffer[i].dispatchEvent(changeEvent);
            break;
        }
    }

    
// Select Contact if Contact Name, Service Name, Email Address  
    if(i == Object.size(dataBuffer)){  	
    	for (i = 0; i < dataBuffer.length; i++) {
        	if (doesMatch(dataBuffer[i].innerText, localStorage.getItem("caseContact")) && doesMatch(dataBuffer[i+3].innerText,localStorage.getItem("serviceAccount")) && doesMatch(dataBuffer[i+8].innerText,localStorage.getItem("contactEmail"))) {
            	dataBuffer[i].dispatchEvent(changeEvent);
                break;
        	} 
    	}
    }
    
// Select Contact if Contact Name, Account Name   
    if(i == Object.size(dataBuffer)){  	
    	for (i = 0; i < dataBuffer.length; i++) {
        	if (doesMatch(dataBuffer[i].innerText, localStorage.getItem("caseContact")) && doesMatch(dataBuffer[i+3].innerText,localStorage.getItem("accountName"))) {
            //	alert("Account Found on Parent level with Different Email");
                dataBuffer[i].dispatchEvent(changeEvent);
                break;
            }
    	}
    } 
    
// Select Contact if Contact Name, Service Name
    if(i == Object.size(dataBuffer)){  	
    	for (i = 0; i < dataBuffer.length; i++) {
           // alert(dataBuffer[i].innerText + ", "+dataBuffer[i+3].innerText +" ," + dataBuffer[i+8].innerText);
        	if (doesMatch(dataBuffer[i].innerText, localStorage.getItem("caseContact")) && doesMatch(dataBuffer[i+3].innerText,localStorage.getItem("serviceAccount"))) {
            //	alert("Account Found on Service Level with Different Email");
            	dataBuffer[i].dispatchEvent(changeEvent);
                break;
        	} 
    	}
    }
}
    
// Returns true is either str1.includes(str2) or str2.includes(str1)
function doesMatch(str1, str2) {
    if (str2 === null || str1 === null) {
        return false;
    } else {
        if (str1.includes(str2) || str2.includes(str1)) {
            return true;
        } else {
            return false;
        }
    }
}
}