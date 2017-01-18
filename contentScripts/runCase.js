var state = localStorage.getItem("toRun");
if (state == 1){	
document.addEventListener('keyup', doc_keyUp, false);

var runTime = localStorage.getItem("runTime");

if(runTime.includes("Start")){
    getValues();
}

if(runTime.includes("Second")){
    assignCase();
}

if(runTime.includes("Third")){
   localStorage.setItem("runTime", "Done"); 
   document.getElementsByName('newEmail')[0].click(); 
}


function getValues() {
minMag = [
    ["Baierl Automotive","baierlautomotive", "Shawn Kriesel","Baierl"],
    ["Barbera's Autoland","barberasautolandcllc", "Andrew Parent","Barbera"],
    ["Bobby Rahal","bobbyrahal", "Shawn Kriesel","Bobby Rahal"],
    ["Certified Preowned.com","beasley", "Katelyn Whitman", "Certified Preowned.com"],
    ["Charles Barker Automotive","charlesbarker","Kyle Hand","Charles Barker"],
    ["Clinton Auto Group","clintonautogroup","Steve Curtis","Clinton"],
    ["Experience Auto Group","theexperienceautogroup","Andrew Reilly", "Experience"],
    ["Fletcher Auto Group","fletcherautogroup","Anel Hodzic","Fletcher"],
    ["Davis Moore Group","davismooreautogroup","Anel Hodzic","Davis Moore"],
    ["Power of Bowser","powerofbowser","Michelle Jimmo","Power of Bowser"],
    ["Riverside Auto Group","splashpage1","Nick Bernier","Riverside"],
    ["Roger Beasley","rogerbeasleyautomotive","Katelyn Whitman", "Roger Beasley"],
    ["Sherwood of Salisbury","sherwoodofsalisbury","Jordan LC","Sherwood"],
    ["Price Auto","priceautogroup","Steve Curtis","Price"],
    ["Maquire Family of Dealerships","maguireautogroup","Jordan LC", "Maquire"],
    ["Premier Collection","premiercollection","Chris Cota","Premier"],   
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
    
    localStorage.setItem("accountName", buffer[i]);
    i ++;

    while (testLine(buffer[i]) === false) {
        i ++;
    }
    localStorage.setItem("serviceAccount", buffer[i]);
    i++;

    while (testLine(buffer[i]) === false) {
        i++;
    }
    contactLine(buffer[i]);
    
    localStorage.setItem("subject", document.getElementById('cas14_ileinner').innerText);

// Debugging Alert
    //alert(localStorage.getItem("accountName") + "\n" + localStorage.getItem("serviceAccount") + "\n" + localStorage.getItem("caseContact") + "\n" + localStorage.getItem("subject"));
    testMiniMag();
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
                alert("Possible Mini Mag Please Check:\n" + localStorage.getItem("accountName") + "\nPlease assign case to: " + minMag[i][2]);
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
    
        if((serviceAccount.endsWith("fd") || serviceAccount.endsWith("fd ") || serviceAccount.endsWith("fd   ")) && ((queue[0].innerText.contains("MAG")))){
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