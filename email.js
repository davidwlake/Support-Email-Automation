///////////////////////////////////
//Authors: David Lake & Patrick Murphy
//
//Last Modified: 12.6.16 David Lake
//
////////////////////////////////////

// If on sendEmail Page
if (document.URL.includes("/_ui/core/email/author/EmailAuthor")) {
    writeEmail();
}else{
    document.getElementsByName('newEmail')[0].click();
}

function writeEmail() {
 //Variable Initialization
    var caseNumber = document.getElementById('p3').value;
    var name = localStorage.getItem("caseContact");
    var subject = localStorage.getItem('subject');

    var nameBuffer = name.split(' ');
    var subjectBuffer = subject.split(' ');

    var first = nameBuffer[0]; 
    var title = '';

//Flag to mark case as Internal
    if(name.includes("Internal")){
        name = localStorage.getItem("caseName");
        document.getElementById('p24').value = localStorage.getItem("email");
        first = nameBuffer[0];

    }else{
        first = nameBuffer[0];
    }

    subjectBuffer.shift();
    for (var i = 0; i < subjectBuffer.length; i++) {
        if (subjectBuffer[i] != ",") {
            title += " " + subjectBuffer[i];
        }
    }
    
    var confirmation = "Hi " + first + ", \n\nThank you for contacting Dealer.com Dealer Support.\n\nWe have received your email and created support case: " + caseNumber + ".\nFor case status updates please respond directly to this email. For immediate assistance please contact us at 888-895-2994.\n\nFor case status updates please respond directly to this email.\n\nThank you for your continued partnership,\n\n Dealer.com Support";
    
    document.getElementById('p6').value = "Re: " + title + " (Case #" + caseNumber + ")";
    document.getElementById('p7').value = confirmation;

}