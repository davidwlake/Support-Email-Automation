var state = localStorage.getItem("toRun");

if( state == 1){
 var serviceAccount = localStorage.getItem("serviceAccount");

if (localStorage.getItem("queue").includes("MAG")) {
    writeMagEmail();
} else if(localStorage.getItem("subject").includes("supportform_firstmovers")){
    writeFirstMovers();
} else if (serviceAccount.endsWith("fd") || serviceAccount.endsWith("fd ")){
    writeFordEmail();
} else {
    writeRetail();
}

function writeMagEmail() {
    //Variable Initialization
    var caseNumber = document.getElementById('p3').value;
    var name = localStorage.getItem("caseContact");
    var subject = localStorage.getItem('subject');
    var subjectBuffer = subject.split(' ');
    var title = '';
    var emails = localStorage.getItem("emails");
    var support = "majoraccountsupport@dealer.com:DDC-Support MAG";
    document.getElementById('p26').value = support;

    document.getElementById('p24').value = localStorage.getItem("contactEmail") + "; " + emails;


    subjectBuffer.shift();
    for (var i = 0; i < subjectBuffer.length; i++) {
        if (subjectBuffer[i] != ",") {
            title += " " + subjectBuffer[i];
        }
    }
    
    var confirmation = "Hello " + localStorage.getItem("firstName") + ", \n\nThank you for contacting Dealer.com Dealer Support.\n\nWe have received your email and created support case: " + caseNumber + ".\nFor case status updates please respond directly to this email. For immediate assistance please contact us at 888-694-3032.\n\nThank you for your continued partnership,\n\n Dealer.com Support";
    document.getElementById('p6').value = "Re: " + title + " (Case #" + caseNumber + ")";
    document.getElementById('p7').value = confirmation;
}

function writeRetail() {
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
    
    var confirmation = "Hello " + localStorage.getItem("firstName") + ", \n\nThank you for contacting Dealer.com Dealer Support.\n\nWe have received your email and created support case: " + caseNumber + ".\nFor case status updates please respond directly to this email. For immediate assistance please contact us at 888-895-2994.\n\nThank you for your continued partnership,\n\n Dealer.com Support";
    document.getElementById('p6').value = "Re: " + title + " (Case #" + caseNumber + ")";
    document.getElementById('p7').value = confirmation;
}

function writeFirstMovers() { 
       //Variable Initialization
    var caseNumber = document.getElementById('p3').value;
    var name = localStorage.getItem("caseContact");
    var subject = localStorage.getItem('subject');
    var subjectBuffer = subject.split(' ');
    var title = '';
    var emails = localStorage.getItem("emails");
    emails = emails + "; toyotafirstmovers@dealer.com";
     var support = "majoraccountsupport@dealer.com:DDC-Support MAG";
    document.getElementById('p26').value = support;

    document.getElementById('p24').value = localStorage.getItem("contactEmail") + "; " + emails;


    subjectBuffer.shift();
    for (var i = 0; i < subjectBuffer.length; i++) {
        if (subjectBuffer[i] != ",") {
            title += " " + subjectBuffer[i];
        }
    }
    
    var confirmation = "Hello " + localStorage.getItem("firstName") + ", \n\nThank you for contacting Dealer.com Dealer Support.\n\nWe have received your email and created support case: " + caseNumber + ".\nFor case status updates please respond directly to this email. For immediate assistance please contact us at 888.456.6016.\n\nThank you for your continued partnership,\n\n Dealer.com Support";
    document.getElementById('p6').value = "Re: " + title + " (Case #" + caseNumber + ")";
    document.getElementById('p7').value = confirmation;
}
   
function writeFordEmail(){
    //Variable Initialization
    var caseNumber = document.getElementById('p3').value;
    var name = localStorage.getItem("caseContact");
    var subject = localStorage.getItem('subject');
    var subjectBuffer = subject.split(' ');
    var title = '';
    var emails = localStorage.getItem("emails");
    var support = "eliteplus@dealer.com:Support Ford Elite Plus";
    document.getElementById('p26').value = support;

    document.getElementById('p24').value = localStorage.getItem("contactEmail") + "; " + emails;


    subjectBuffer.shift();
    for (var i = 0; i < subjectBuffer.length; i++) {
        if (subjectBuffer[i] != ",") {
            title += " " + subjectBuffer[i];
        }
    }
    
    var confirmation = "Hello " + localStorage.getItem("firstName") + ", \n\nThank you for contacting Dealer.com Dealer Support.\n\nWe have received your email and created support case: " + caseNumber + ".\nFor case status updates please respond directly to this email. For immediate assistance please contact us at 877.200.9418.\n\nThank you for your continued partnership,\n\n Dealer.com Support";
    document.getElementById('p6').value = "Re: " + title + " (Case #" + caseNumber + ")";
    document.getElementById('p7').value = confirmation;
}
  
}

