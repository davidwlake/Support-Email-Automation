 var buffer = document.getElementById('cas15_ileinner').innerText;  
    buffer = buffer.split("\n");
    var i = indexofNextLine(buffer, -1); //index 
buffer[i] = buffer[i].replace(">", "");
localStorage.setItem("W2Ccontact", buffer[i].split("<")[0]);
localStorage.setItem("W2Cemail", buffer[i].split("<")[1]);

//Website
i = indexofNextLine(buffer, i);
website = "http://" + buffer[i];
localStorage.setItem("W2CWebsite", buffer[i]);

var xhr = new XMLHttpRequest();
callback;
xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200 && callback) callback(xhr.responseText);
}
xhr.open("GET", website, true);

xhr.send();

//DDC.siteSettings.accountId);}, 5000);

i = indexofNextLine(buffer, i);



function indexofNextLine(rawData, currentIndex){
    i = currentIndex + 1;
    patt1 = /\w/g;
    while(!(rawData[i].match(patt1))){
        i++;
    }
    return i;
}
