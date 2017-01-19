var state = localStorage.getItem("toRun");
if( state == 1){
    window.onload = function () {
   
     var dataBuffer = window.frames[1].document.getElementsByClassName(" dataCell ");

    var i = 0;
 	var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("click", true, true); 
    
   // alert(dataBuffer[0]);
    for (i = 0; i+1 < dataBuffer.length; i++) {
      
        if(doesMatch(dataBuffer[i+1].innerText, localStorage.getItem("dtID"))) {
            dataBuffer[i].dispatchEvent(changeEvent);
            break;
        }
    }
        
    if(i+1 == dataBuffer.length){
        alert("Account Not Found");
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
}