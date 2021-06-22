function validate() {

    if( document.myForm.name.value =="" ) {
        alert( "Please include your name." );
        document.myForm.name.focus() ;
        return false;
    }

    if( document.myForm.pnum.value == "" ) {
        alert( "Please provide your number." );
        document.myForm.pnum.focus() ;
        return false ;
    }

}

function validateEmail() {

    var email document.myForm.email.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct e-mail.")
        document.myForm.email.focus();
        return false;
    }
    return true;
}