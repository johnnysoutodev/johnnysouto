// main.js

var year = new Date().getFullYear();

var cookie;
var cname = "acceptCookie";
var cvalue = "yes";
var decodedCookie = decodeURIComponent(document.cookie);
var btnAcceptCookie = document.querySelector('#btn-accept-cookie');
var btnRefuseCookie = document.querySelector('#btn-refuse-cookie');

btnAcceptCookie.addEventListener('click', btnAcceptClicked);
btnRefuseCookie.addEventListener('click', btnRefuseClicked);

function hideCookieAlert(){
    var element = document.getElementById("alertCookie");
    element.classList.add("hide");
}

function showCookieAlert(){
    var element = document.getElementById("alertCookie");
    element.classList.remove("hide");
}

function btnAcceptClicked(){
    hideCookieAlert();
    acceptCookie();
}

function btnRefuseClicked(){
    hideCookieAlert();
    refuseCookie();
}

function acceptCookie(){
    var exdays = 90;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    acceptGA();
}

function refuseCookie(){
    var exdays = 0;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    refuseGA();
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