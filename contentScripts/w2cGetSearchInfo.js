var state = localStorage.getItem("toRun");

if (state == 1){	
    localStorage.setItem("dtID", document.getElementById('acc3_ileinner').getElementsByTagName('a')[0].getAttribute("href").replace( "/", ""));
    localStorage.setItem("accountName", document.getElementById('acc3_ileinner').getElementsByTagName('a')[0].innerText);

    window.location.href = localStorage.getItem("W2CCaseURL");
}