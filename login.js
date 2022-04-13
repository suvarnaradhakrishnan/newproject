const form = document.getElementsByTagName('form')[1];
let email = document.getElementById("exampleInputEmail1");
let erroremail = document.getElementById("errorEmail1");
let password=document.getElementById("exampleInputPassword1");
let errorpwd = document.getElementById("errorPassword1");

function validate(){
        if(email_validation(email)){
            if(password_validation(password)){
                return true;
            }
            }
        return false; 
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

form.addEventListener('submit',function(event){
    if(!validate()){
        event.preventDefault();
    }
});

   

   
