///////////////////////////////////
//Authors: David Lake & Patrick Murphy
//
//Last Modified: 12.12.16 David Lake
//
////////////////////////////////////

getInput();
function getInput() {
    var buffer = document.getElementById('cas15_ileinner').innerText;
    var i = 0; //index 
    buffer = buffer.split("\n");

    while (testLine(buffer[i]) === false) {
        i++;
    }
    localStorage.setItem("accountName", buffer[i]);
    i++;

    while (testLine(buffer[i]) === false) {
        i++;
    }
    localStorage.setItem("serviceAccount", buffer[i]);
    i++;

    while (testLine(buffer[i]) === false) {
        i++;
    }
    localStorage.setItem("caseContact", buffer[i]);

    if(localStorage.getItem("caseContact").includes("Internal")){
        i++;
        while (testLine(buffer[i]) === false) {
            i++;
        }
            localStorage.setItem("email", buffer[i]);
        i++;

        while (testLine(buffer[i]) === false) {
            i++;
        }
        localStorage.setItem("caseName", buffer[i]);
    }else{
         i++;
        while (testLine(buffer[i]) === false) {
            i++;
        }
            localStorage.setItem("emailAddress", buffer[i]);
    }
    
    
    localStorage.setItem("subject", document.getElementById('cas14_ileinner').innerText);

// Debugging Alert
    //alert(localStorage.getItem("accountName") + "\n" + localStorage.getItem("serviceAccount") + "\n" + localStorage.getItem("caseContact") + "\n" + localStorage.getItem("subject"));

    document.getElementsByName('edit')[0].click();
    
}

function testLine(line) {
    var str = line;
    var patt1 = /\w/g;
    var result = str.match(patt1);
    if (result === null) {
        return false;
    } else {
        return true;
    }
}

