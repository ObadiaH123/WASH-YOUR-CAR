function formValidation() {

    var name = document.myForm.name;
    var pnum = document.myForm.pnum;
    var email = document.myForm.email;
    var male = document.myForm.male;
    var female = document.myForm.female;

    if(allLetter(name)) {
       
        if(allNumeric(pnum)) {

            if(validateEmail(email)) {

                if(validateGender(male,female)) {

                }
            }
        }
    }
    return false;

}

function allLetter(name) {
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)) {
        return true;
    }
    else {
        alert('Name must have alphabet characters only.');
        name.focus();
        return false;
    }
}

function allNumeric(pnum) {
    var numbers = /^[0-9]+$/;
    if(pnum.value.match(numbers)) {
        return true;
    }
    else {
        alert('Phone number is required.');
        pnum.focus();
        return false;
    }
}

function validateGender(male,female) {
    x = 0;

    if(male.checked) {
        x++;
    }
    if(female.checked) {
        x++;
    }

    if(x == 0) {
        alert('Select Male/Female');
        male.focus();
        return false;
    }

    else {
        alert('Form Submitted Succesfully.');
        window.location.reload()
        return true;
    }
}