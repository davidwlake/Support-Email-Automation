var buffer = document.getElementById('cas15_ileinner').innerText;
    var i = 0; //index 
    buffer = buffer.split("\n");

while (testLine(buffer[i]) === false) {
        i++;
}

buffer[i] = buffer[i].replace(">", "");
localStorage.setItem("W2Ccontact", buffer[i].split("<")[0]);
localStorage.setItem("W2Cemail", buffer[i].split("<")[1]);
i++;

while (testLine(buffer[i]) === false) {
        i++;
}


function nextLine(rawData, currentIndex){
    i = currentIndex;
    patt1 = /\w/g;
    while(!(rawData[i].match(patt1))){
        i++;
    }
    return i;
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