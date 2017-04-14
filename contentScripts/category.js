 var changeEvent = document.createEvent("HTMLEvents");
changeEvent.initEvent("change", true, true);
document.getElementsByName('j_id0:form:j_id8:j_id38:j_id45')[0].value = "en_US";
document.getElementsByName('j_id0:form:j_id8:j_id38:j_id45')[0].dispatchEvent(changeEvent, setTimeout(function(){
    document.getElementsByName('j_id0:form:j_id8:j_id38:j_id49')[0].value = "Dealer.com (DDC)";
    document.getElementsByName('j_id0:form:j_id8:j_id38:j_id49')[0].dispatchEvent(changeEvent, setTimeout(function(){
        document.getElementsByName('j_id0:form:j_id8:j_id38:j_id53')[0].value = "DDC-Websites";
    }, 1000));
}, 500));
