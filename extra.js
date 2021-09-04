function yahoo() {
    if( /Android/i.test(navigator.userAgent ) ) {
        // If the user is using an Android device.
        window.location = "mailto:metrowood2@yahoo.com@yahoo.com";
    }
    else{
        window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=metrowood2@yahoo.com","_blank");
    }
}