// main.js

var year = new Date().getFullYear();

var cookie;
var cname = "acceptCookie";
var cvalue = "yes";
var exdays = 730;
var decodedCookie = decodeURIComponent(document.cookie);
var btnCookie = document.querySelector('#btn-cookie');

btnCookie.addEventListener('click', btnClicked);

function hideCookieAlert(){
    var element = document.getElementById("alertCookie");
    element.classList.add("hide");
}

function showCookieAlert(){
    var element = document.getElementById("alertCookie");
    element.classList.remove("hide");
}

function btnClicked(){
    hideCookieAlert();
    setCookie();
}

function setCookie(){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    activeGA();
}

function checkCookie(){
    cookie = cname + "=" + cvalue;
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(cookie) == 0) {
        return hideCookieAlert();
        }
    }
    return showCookieAlert();
}

checkCookie();