var runTime = localStorage.getItem("runTime");

if (runTime.includes("scraping")){
    localStorage.setItem("serviceAccount",document.body.innerHTML.match(/^accountId: '(.*?)'/gm));
    alert(document.body.innerHTML.match(/^accountId: '(.*?)'/gm));
    localStorage.setItem("runTime","-1");

}