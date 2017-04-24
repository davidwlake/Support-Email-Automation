$(function () {
        $("#first").draggable();
        $( "#search" ).click(function() {
            var firstName = $("#name").val().split(" ")[0]; 
            var lastName = $("#name").val().split(" ")[1]; 
            var email = $("#email").val();
            
            if(firstName){
                var parm1 = "pv0="+firstName + "&";
            } else {
                var parm1 = "pv0=-1&";
            }
            
            if(lastName){
                var parm2 = "pv1="+lastName + "&";
            } else {
                var parm2 = "pv1=-1&";
            }
            
            
            if(email){
                var parm3 = "pv2="+email;
            } else {
                var parm3 = "pv2=-1";
            }
            
            if(parm1 == "pv0=-1&" && parm2 == "pv1=-1&" && parm3 == "pv2=-1" ){

            } else {
                var url = "https://dealertrack-production.my.salesforce.com/00O32000004pn8f?" + parm1 + parm2 + parm3;
                window.open(url);
            }
        });
    })