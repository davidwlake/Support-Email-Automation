
function populate() {
    chrome.tabs.executeScript({
        file: 'populate.js'
    });
}


function email() {
    chrome.tabs.executeScript({
        file: 'email.js'
    });

}


function magEmail(){
  chrome.tabs.executeScript({
        file: 'magEmail.js'
    });

}

function createCase(){
  chrome.tabs.executeScript({
        file: 'createCase.js'
    });} 

function change(){
  chrome.tabs.executeScript({
        file: 'change.js'
    });

}



document.getElementById('populate').addEventListener('click', populate);
document.getElementById('email').addEventListener('click', email);
document.getElementById('magEmail').addEventListener('click', magEmail);
document.getElementById('toRun').addEventListener('click', change);
document.getElementById('createCase').addEventListener('click', createCase);




/*

var targLink = document.getElementById("something");
var clickEvent = document.createEvent('MouseEvents');
clickEvent.initEvent('dblclick', true, true);
targLink.dispatchEvent(clickEvent);

var info = document.getElementById('cas14_ileinner');
var infoElements = info.split('|');
var infoElements.shift();
var acctName = infoElements[0];
var svcAcct = infoElements[1];
var contactName = infoElements[2];
var prefEmail = infoElements[3];

localStorage.setItem('acctName', acctName);
localStorage.setItem('svcAcct', svcAcct);
localStorage.setItem('contactName', contactName);
localStorage.setItem('prefEmail', prefEmail);

Fw: Another Test | ROI Motors test | spptdemo5 | Patrick Murphy | patrick.murphy @coxautoinc.com

ROI Motors test | spptdemo5 | Patrick Murphy

ROI Motors test

spptdemo5


David Lake

*/

// ==UserScript==