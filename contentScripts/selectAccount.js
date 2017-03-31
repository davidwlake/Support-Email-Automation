var state = localStorage.getItem("toRun");
if (state == 1) {
    var i = 0;
 	var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("click", true, true); 
    
    if(localStorage.getItem("flag") == "TW2C"){
        var dataBuffer = window.frames[1].document.getElementsByClassName(" dataCell ");
        for (i = 0; i+1 < dataBuffer.length; i++) {
        if(doesMatch(dataBuffer[i+1].innerText, localStorage.getItem("dtID")) || doesMatch(dataBuffer[i].innerText, localStorage.getItem("accountName"))) {
           dataBuffer[i].dispatchEvent(changeEvent);
           break;
        }
        }
    } else {
    setTimeout(function(){window.frames[0].document.getElementById('lkenhmdSEARCH_ALL').click();}, 500);
    
    setTimeout(function(){ window.frames[0].document.getElementsByClassName('btn')[0].click(); }, 1500);
    
    setTimeout(function(){ 
     var dataBuffer = window.frames[1].document.getElementsByClassName(" dataCell ");
        for (i = 0; i+1 < dataBuffer.length; i++) {
      
        if(doesMatch(dataBuffer[i+1].innerText, localStorage.getItem("dtID")) || doesMatch(dataBuffer[i].innerText, localStorage.getItem("accountName"))) {
           dataBuffer[i].dispatchEvent(changeEvent);
            break;
        }
    }
    }, 1500); 
    }
        
    
}

    
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

