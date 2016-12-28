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
    var subjectBuffer = subject.split(' ');
    var title = '';
    var emails = localStorage.getItem("emails");
    var support = "support@dealer.com:DDC-Support";
    document.getElementById('p26').value = support;

    document.getElementById('p24').value = localStorage.getItem("contactEmail") + "; " + emails;


    subjectBuffer.shift();
    for (var i = 0; i < subjectBuffer.length; i++) {
        if (subjectBuffer[i] != ",") {
            title += " " + subjectBuffer[i];
        }
    }
    
    var confirmation = "Hello " + localStorage.getItem("firstName") + ", \n\nThank you for contacting Dealer.com Dealer Support.\n\nWe have received your email and created support case: " + caseNumber + ".\nFor case status updates please respond directly to this email. For immediate assistance please contact us at 888-694-3032.\n\nFor case status updates please respond directly to this email.\n\nThank you for your continued partnership,\n\n Dealer.com Support";
    document.getElementById('p6').value = "Re: " + title + " (Case #" + caseNumber + ")";
    document.getElementById('p7').value = confirmation;

}