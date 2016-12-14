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


document.getElementById('populate').addEventListener('click', populate);
document.getElementById('email').addEventListener('click', email);
