

function pass(){
    pswd1=document.getElementById('pswd1').value;
    if(pswd1.length<8){
        alert("Password must contain atleast 8 characers");
        return false;
    }
    else if(pswd1.search(/[0-9]/)==-1){
        alert("Password must contain atleast one number");
        return false;
    }
    else if(pswd1.search(/[A-Z]/)==-1){
        alert("Password must contain atleast one upper case letter");
        return false;
    }
    else if(pswd1.search(/[a-z]/)==-1){
        alert("Password must contain atleast one lower case letter");
        return false;
    }
    else{
        return true;
    }
}
 
function phoneno(){
    phone=document.getElementById('phone').value;
    regex=/^([6-9]+)([0-9]{2}+)(\.-""+)([0-9]{3}+)(\.-""+)([0-9]{4}+)$/;
    if(phone.length !=12){
        alert("Enter valid phone number");
        return false;
    }
    else if(regex.test(phone)==-1){
        alert("Accepts formats XXX XXX XXXX, XXX.XXX.XXXX, XXX-XXX-XXXX only");
        return false;
    }
    else{
        return true;
    }
    
}

function validation(){
    if(pass()==false || phoneno()==false)
    {
        alert("Error! Please check the entered data");
        return false;
    }
    else{
       
        return true;
    }
}