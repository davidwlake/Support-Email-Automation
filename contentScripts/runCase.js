var state = localStorage.getItem("toRun");

if (state == 1){	
document.addEventListener('keyup', doc_keyUp, false);

var runTime = localStorage.getItem("runTime");

if(runTime.includes("Start")){
    if(document.getElementById("cas11_ileinner").innerText == "Web"){
       getW2CValues(); 
    } else {
       getValues(); 
    }  
}

if(runTime.includes("Second")){
    assignCase();
}

if(runTime.includes("Third")){
   localStorage.setItem("runTime", "Done"); 
   document.getElementsByName('newEmail')[0].click(); 
}
    
if(runTime.includes("W2C")){
    document.getElementsByName('edit')[0].click();
}
  
function getW2CValues() {
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

var url = "https://dealertrack-production.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=001&sen=003&sen=00T&sen=005&sen=00U&sen=500&sen=a6R&sen=00O&str=http%3A%2F%2F"+ buffer[i] +"&initialViewMode=detail&fen=001&collapse=1";
    window.location.href = url;
}    
    
function getValues() {
minMag = [
    ["Baierl Automotive","baierlautomotive", "Shawn Kriesel","Baierl"],
    ["Barbera's Autoland","barberasautolandcllc", "Andrew Parent","Barbera"],
    ["Bobby Rahal","bobbyrahal", "Shawn Kriesel","Bobby Rahal"],
    ["Dwayne Lanes","dwaynelaneautocenter", "Jordan LC", "Dwayne Lane"], 
];
getInput();

function getInput() {
    var buffer = document.getElementById('cas15_ileinner').innerText;
    var i = 0; //index 
    buffer = buffer.split("\n");
  


    while (testLine(buffer[i]) === false) {
        i++;
    }
    if(buffer[i].includes("Internal") || buffer[i].includes("internal")){
        localStorage.setItem("internal", buffer[i]);
        i++;
        while (testLine(buffer[i]) === false) {
            i++;
        }
    } else {
        localStorage.setItem("internal", "False");
    }
    localStorage.setItem("accountName", buffer[i].split("|")[0]);
    localStorage.setItem("dtID", buffer[i].split("|")[1]);
    if(typeof(buffer[i].split("|")[1]) == "undefined"){
        localStorage.setItem("dtID", buffer[i].split("|")[0]);
    }

    i ++;
    
    while (testLine(buffer[i]) === false) {
        i ++;
    }
    if(buffer[i].includes("|")){
        var temp = buffer[i].split("|");
        localStorage.setItem("serviceAccount", temp[0]);
        localStorage.setItem("additionalAcounts", temp.splice(1,temp.length));
        i++;
    }else {
        localStorage.setItem("serviceAccount", buffer[i]);
        localStorage.setItem("additionalAcounts", "");
        i++;
    }


    while (testLine(buffer[i]) === false) {
        i++;
    }
    contactLine(buffer[i]);
    
    localStorage.setItem("subject", document.getElementById('cas14_ileinner').innerText);

// Debugging Alert
    //alert(localStorage.getItem("accountName") + "\n" + localStorage.getItem("serviceAccount") + "\n" + localStorage.getItem("caseContact") + "\n" + localStorage.getItem("subject"));
//    testMiniMag();



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
    

function testMiniMag(){
    for(i = 0; i < minMag.length; i++){
        if(minMag[i][0].match(localStorage.getItem("accountName")) || localStorage.getItem("accountName").match(minMag[i][0])){
            alert("Account is Mini Mag:\n" + localStorage.getItem("accountName") + "\nPlease assign case to: " + minMag[i][2]);
        } else {
            if(minMag[i][1].match(localStorage.getItem("serviceAccount")) || localStorage.getItem("serviceAccount").match(minMag[i][1])){
             alert("Account is Mini Mag:\n" + localStorage.getItem("serviceAccount") + "\nPlease assign case to: " + minMag[i][2]);
            } else {
            if(minMag[i][3].match(localStorage.getItem("accountName")) || localStorage.getItem("accountName").match(minMag[i][3])){
              //  alert("Possible Mini Mag Please Check:\n" + localStorage.getItem("accountName") + "\nPlease assign case to: " + minMag[i][2]);
            }
        }
        }
    } 
}

function contactLine(str){
// "Name" <email>
// "Name"<email>
// "Name" eamil

    var emails = ""; 
    var bufferLine = str.split("|");
    //console.log(bufferLine[0].replace("<", " "));
    bufferLine[0] = bufferLine[0].replace("<", " ");
    bufferLine[0] = bufferLine[0].replace(">", "");
    
    firstBlock = bufferLine[0].split(" ");
    firstName = firstBlock[0];
    lastName = firstBlock[1];

    contactEmail = firstBlock[2];
    
    if(bufferLine[1] != null){
        for(var i = 1; i < bufferLine.length; i++){
            emails += bufferLine[i] + "; "; 
        }// End For Loop
        
        localStorage.setItem("emails", emails);
    } else{
        localStorage.setItem("emails", "");
    }
    localStorage.setItem("firstName", firstName );
    localStorage.setItem("lastName", lastName );
    localStorage.setItem("contactEmail", contactEmail);
    temp = firstName + " " + lastName;
    localStorage.setItem("caseContact", temp);

}
    
   
}

function assignCase(){
    var htmlBuffer = document.getElementById('cas1_ileinner');
    var queue = htmlBuffer.getElementsByTagName('a');
    var clickEvent = document.createEvent("HTMLEvents");
    clickEvent.initEvent("click", true, true); 
    
    localStorage.setItem("queue", queue[0].innerText);
     
    var serviceAccount = localStorage.getItem("serviceAccount");
    

    if((serviceAccount.endsWith("fd") || serviceAccount.endsWith("fd ") || serviceAccount.endsWith("fd   ")) && (!(queue[0].innerText.includes("MAG")))){
        localStorage.setItem("runTime", "assign");
        queue[1].click();
    }else{

        localStorage.setItem("runTime", "Done");
        document.getElementsByName('newEmail')[0].click();
    }
     
    
}
    
function doc_keyUp(e) {
    // Downarrow and the ctrl key at the same time
    if (e.ctrlKey && e.keyCode == 39) {
        window.open("https://dealertrack-production.my.salesforce.com/500", '_blank');
    }
}
    
}


function indexofNextLine(rawData, currentIndex){
    i = currentIndex + 1;
    patt1 = /\w/g;
    while(!(rawData[i].match(patt1))){
        i++;
    }
    return i;
}

