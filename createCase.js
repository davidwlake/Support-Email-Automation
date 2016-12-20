if (document.URL.includes("/ui/setup/Setup")){ 
    start();
}

if (document.URL.includes("/_ui/search/ui/")){ 
    SRPage();
}

if (document.URL.includes("?srPos=")){ 
    document.getElementsByName("newCase")[0].click();
}

if (document.URL.includes("/setup/ui/")){ 
    document.getElementsByName('save')[1].click();
}

if (document.URL.includes("/apex/MLCSelectionPage?")){ 
   var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("change", true, true); 
    
    document.getElementsByName('j_id0:form:j_id8:j_id38:j_id40')[0].value = "Body Goes Here";
    document.getElementsByName('j_id0:form:j_id8:j_id38:j_id42')[0].value = "Subject Goes Here";
    document.getElementsByName('j_id0:form:j_id8:j_id38:j_id53')[0].value = "DDC-Websites";
    document.getElementsByName('j_id0:form:j_id8:j_id38:j_id53')[0].dispatchEvent(changeEvent, setTimeout(function(){ document.getElementsByName('j_id0:form:j_id8:j_id38:j_id57')[0].value = "Composer"; document.getElementsByName('j_id0:form:j_id8:j_id38:j_id57')[0].dispatchEvent(changeEvent,setTimeout(writeSub, 500));}, 500));
    
}


function start(){
	localStorage.setItem("accountName", "spptdemo1" );
	localStorage.setItem("parentAccount", "ROI Motors test" );
	localStorage.setItem("caseContact", "David Lake" );
	localStorage.setItem("emailAddress", "davidwlake@gmail.com" );

	
	document.getElementById('phSearchInput').value = localStorage.getItem("caseContact");
	document.getElementById('phSearchButton').click();
}

function SRPage(){
	var i = 0;
	var dataBuffer = document.getElementsByClassName("dataCell");


	Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
	};


	for (i = 0; i < dataBuffer.length; i++) {
        if (dataBuffer[i].innerText == localStorage.getItem("caseContact") && dataBuffer[i+4].innerText == localStorage.getItem("parentAccount") && dataBuffer[i+5].innerText == localStorage.getItem("emailAddress")) {
          //  alert(i);
            dataBuffer[i].getElementsByTagName("a")[0].click();
            break;
        }
    }

    if(i == Object.size(dataBuffer)){  	
    	for (i = 0; i < dataBuffer.length; i++) {
        	if (dataBuffer[i].innerText == localStorage.getItem("caseContact") && dataBuffer[i+4].innerText == localStorage.getItem("accountName") && dataBuffer[i+5].innerText == localStorage.getItem("emailAddress")) {
            	alert("Account Found on Service Level");
            	dataBuffer[i].getElementsByTagName("a")[0].click();
                break;
        	} 
    	}

	if(i == Object.size(dataBuffer)){
		for (i = 0; i < dataBuffer.length; i++) {
        	if (dataBuffer[i].innerText == localStorage.getItem("caseContact") && dataBuffer[i+4].innerText == localStorage.getItem("parentAccount")) {
            	alert("Account Found with Different Email");
            	dataBuffer[i].getElementsByTagName("a")[0].click();
        	break; 
        	}	
    	} 
    }	
	if(i == Object.size(dataBuffer)){
    	alert("No Account Found:\nPlease Select the Case Contact Below");
	} // End If 
}// End If
}

function writeSub(){
   document.getElementsByName('j_id0:form:j_id8:j_id38:j_id61')[0].value = "Composer Tools" ; 
   document.getElementById('j_id0:form:j_id8:j_id63:bottom:j_id65').click();
}