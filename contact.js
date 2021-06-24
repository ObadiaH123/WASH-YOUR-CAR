const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
    e.preventDefault();

    const uname = document.getElementById('uName').value;
    const pnum = document.getElementById('pNum').value;
    const email = document.getElementById('eMail').value;
    const gender = document.getElementById('sex').value;
   
    if (uname.value == "");
     {
         alert("Please enter your name.");
         uname.focus();
         return false;
     }

     if (pnum.value == "") {
         alert("Please enter your phone number.");
         pnum.focus();
         return false;
     }

     if (email.value === "") {
         alert("Please enter your e-mail address.");
         email.focus;
         return false;
     }

     return true;


}

submitBtn.addEventListener('click', validate());

