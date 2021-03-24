// main.js

var year = new Date().getFullYear();

var cookie = "";
var cname = "acceptCookie";
var cvalue = "yes";
var exdays = 7;
var btnCookie = document.querySelector('#btn-cookie');

function acceptCookie() {
    console.log("Check");
    btnCookie.addEventListener('click', btnClicked);
    if (document.cookie == "") {
        console.log("Cookie not exist");
        setCookie();
    } else {
        console.log("Cookie exist");
        hideCookieAlert();
    }
}

function hideCookieAlert(){
    var element = document.getElementById("alertCookie");
    element.classList.add("hide");
}

function showCookieAlert(){
    var element = document.getElementById("alertCookie");
    element.classList.remove("hide");
}

function btnClicked(){
    console.log("Clicked");
    hideCookieAlert();
}

function setCookie(){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

acceptCookie();