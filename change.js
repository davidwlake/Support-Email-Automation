var state = localStorage.getItem("toRun");

if (state === null) {
    state = 1;
    localStorage.setItem("toRun", 0);
}

if (state == 1) {
    state = 0;
} else {
    state = 1;   
}

localStorage.setItem("toRun", state);

if ( state === 1) {
    alert("On");
} else {
    alert("Off");
}
