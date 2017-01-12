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
        if (dataBuffer[i].innerText == localStorage.getItem("caseNumber")) {
            dataBuffer[i].getElementsByTagName("a")[0].click();
            break;
        }
    }
    if(i == Object.size(dataBuffer)){ 
      alert("Case Number: "+localStorage.getItem("caseNumber") +" Not Found");   
    }

