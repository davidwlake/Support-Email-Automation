///////////////////////////////////
//Authors: David Lake & Patrick Murphy
//
//Last Modified: 12.12.16 David Lake
//
////////////////////////////////////
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
    contactLine(buffer[i]);

    if(localStorage.getItem("caseContact").includes("Internal")){
        i++;
        while (testLine(buffer[i]) === false) {
            i++;
        }
        localStorage.setItem("caseName", buffer[i]);
    }
    
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
    var testBuffer = str.split("<");
    localStorage.setItem("caseContact", testBuffer[0]);

    if(testBuffer[1].includes("|")){
        var emailsBuffer = testBuffer[1].split("|"); //.substring(0, testBuffer[1].length - 2)
        emailsBuffer[0] = emailsBuffer[0].replace(">", "");
        localStorage.setItem("email", emailsBuffer);
    }else{
        testBuffer[1] = testBuffer[1].replace(">", "");
        localStorage.setItem("email", testBuffer[1]);
    }

}