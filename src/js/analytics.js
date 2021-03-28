// analytics

// Google Analytics

function refuseGA(){
    window['ga-disable-G-05QDHZNLE0'] = true;
}

function acceptGA() {
    var exdays = 90;
    window['ga-disable-G-05QDHZNLE0'] = false;
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-05QDHZNLE0', {
        'cookie_domain': 'jsdeveloper.com.br',
        'cookie_expires': exdays * 24 * 60 * 60,
        'cookie_update': false
    });

}