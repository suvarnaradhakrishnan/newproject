const form = document.getElementsByTagName('form')[1];
let name1 = document.getElementById("inputName");
let errorname = document.getElementById("errorName");
let email = document.getElementById("inputEmail");
let erroremail = document.getElementById("errorEmail");
let mobnumber = document.getElementById("inputMobNumber");
let errormobnumber = document.getElementById("errorMobNumber");
let password = document.getElementById("inputPassword");
let errorpwd = document.getElementById("errorPassword");
let repassword = document.getElementById("rePassword");
let errorrepwd = document.getElementById("errorrePassword");

 function validate(){
    if(name_validation(name1)){
        if(email_validation(email)){
            if(mobnumber_validation(mobnumber)){
                if(password_validation(password)){
                    if(repassword_validation(repassword)){
                        return true;
                    }
                   
                }
               
            }
        }
        }
        return false;
      }

    function name_validation(name1){
        let regex = /^[a-zA-Z]{3,30}$/; 
        if(regex.test(name1.value)){
            errorname.innerHTML = "";
             return true;    
        }
        else{
            errorname.innerHTML = "Invalid name";
            name1.value="";
             return false;   
        }       
    }

    function email_validation(email){
        let regexp1= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
        if(regexp1.test(email.value)){
            erroremail.innerHTML = "";
             return true;

        }
        else if(email.value.trim()===""){
            erroremail.innerHTML = "Email can't be empty";
            email.value="";
            return false;
        } 
        else {
            erroremail.innerHTML = "Enter a valid email id";
            email.value="";
            return false;
        }       
    }

    function mobnumber_validation(mobnumber){
        let regexp2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if(regexp2.test(mobnumber.value)){
            errormobnumber.innerHTML = "";
             return true;
        }
        else if(mobnumber.value.trim()===""){
            errormobnumber.innerHTML = "Mobile number can't be empty";
            mobnumber.value="";
            return false;
        }
        else{
            errormobnumber.innerHTML = "Invalid mobile number ";
            mobnumber.value="";
            return false; 
        }
      
    }

function password_validation(password) 
{ 
var passw1 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
var passw2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(password.value.match(passw1)) 
{ 
document.getElementById("msg").innerHTML ="Strong" ;
document.getElementById("msg").style.color ="green" ;
errorpwd.innerHTML = "";
return true;
}
else if(password.value.match(passw2))
{ 
document.getElementById("msg").innerHTML ="Medium" ;
document.getElementById("msg").style.color ="orange" ;
errorpwd.innerHTML = "Password must contain minimum 8 characters and atleast one special character";
password.value="";
return false;
}
else if(password.value.trim()===""){
    document.getElementById("msg").innerHTML ="" ;
    errorpwd.innerHTML = "Password can't be empty";
    password.value="";
    return false;
}
else {
document.getElementById("msg").innerHTML ="Weak" ;
document.getElementById("msg").style.color ="red" ;
errorpwd.innerHTML = "Password must contain minimum 8 characters, at least one uppercase, lowercase, number and special character";
password.value="";
return false;
}
}

function repassword_validation(repassword){
    if(password.value===repassword.value){
        return true;
    }
    else if(repassword.value.trim()===""){
        errorrepwd.innerHTML="Password can't be empty";
        repassword.value="";
        return false;
    }
    else{
        errorrepwd.innerHTML="Password doesn't match";
        repassword.value="";
        return false;
    }
}  

form.addEventListener('submit',function(event){
     if(!validate()){
        event.preventDefault();
    }
});




