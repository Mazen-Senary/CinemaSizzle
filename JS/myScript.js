function openNav() 
{
document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() 
{
document.getElementById("mySidenav").style.width = "0";
}

var counter = 1;
function next()
{
    if(counter == 6)
    {
        counter = 1;
    }
    else
        counter++;
    document.getElementById("slideshow").src="images/"+counter+".jpg";
}

function prev()
{
    if(counter == 1)
        {
            counter = 6;
        }
        else
            counter--;
        document.getElementById("slideshow").src="images/"+counter+".jpg";
}
    setInterval(next,2000);



function signUpValidation()
{
    var valid = true;
    var formLabels = document.getElementsByTagName("label");
    var name = document.regForm.name.value;

    if(name == "")
    {
        formLabels[0].innerHTML = "*Name: [Required]";
        formLabels[0].style.color = "red";
        valid = false;
    }
    
    else if(!isNaN(name))
    {
        formLabels[0].innerHTML = "*Name: Number are not allowed";
        formLabels[0].style.color = "red";
        valid = false;
    }
    
    else
    {
        formLabels[0].innerHTML = "*Name: Accepted";
        formLabels[0].style.color = "#04AA6D";
        valid = (valid) ? true : false;
    }

    var email = document.regForm.userEmail.value;
    var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if(email == "")
    {
        formLabels[1].innerHTML = "*Email: [Required]";
        formLabels[1].style.color = "red";
        valid = false;
    }
        
    else if(!regex.test(email))
    {
        formLabels[1].innerHTML = "*Email: Invalid";
        formLabels[1].style.color = "red";
        valid = false;
    }
    else
    {
        formLabels[1].innerHTML = "*Email: Accepted";
        formLabels[1].style.color = "#04AA6D";
        valid = (valid) ? true : false;
    }

    var password = document.regForm.userPassword.value;
    if(password == "")
        {
            formLabels[2].innerHTML = "*Password: [Required]";
            formLabels[2].style.color = "red";
            valid = false;
        }
        
    else if(password.length<8)
    {
        formLabels[2].innerHTML = "*Password: Weak Password";
        formLabels[2].style.color = "red";
        valid = false;
    }
    else
    {
        formLabels[2].innerHTML = "*Password: Accepted";
        formLabels[2].style.color = "#04AA6D";
        valid = (valid) ? true : false;
    }

    var phoneNum = document.regForm.userPhone.value;
    if(phoneNum == "")
    {
        formLabels[3].innerHTML = "*Phone Number: [Required]";
        formLabels[3].style.color = "red";
        valid = false;
    }
    
    else if(isNaN(phoneNum))
    {
        formLabels[3].innerHTML = "*Phone Number: Only numbers are  allowed";
        formLabels[3].style.color = "red";
        valid = false;
    }

    else if(phoneNum.length < 6 || phoneNum.length > 6)
    {
        formLabels[3].innerHTML = "*Phone Number: Must be exactly 6 digits";
        formLabels[3].style.color = "red";
        valid = false;
    }

    else
    {
        formLabels[3].innerHTML = "*Phone Number: Accepted";
        formLabels[3].style.color = "#04AA6D";
        valid = (valid) ? true : false;
    }

    return valid;
}

function loginValidation()
{
    var isvalid = true;
    var formLabels = document.getElementsByTagName("label");
    var username = document.loginForm.username.value;

    if(username == "")
    {
        formLabels[0].innerHTML = "*Username: [Required]";
        formLabels[0].style.color = "red";
        isvalid = false;
    }

    else if(!isNaN(username))
    {
        formLabels[0].innerHTML = "*Username: Number are not allowed";
        formLabels[0].style.color = "red";
        isvalid = false;
    }

    else
    {
        formLabels[0].innerHTML = "*Username: Accepted";
        formLabels[0].style.color = "#04AA6D";
        isvalid = (isvalid) ? true : false;
    }

    var password = document.loginForm.Userpass.value;
    if(password == "")
        {
            formLabels[1].innerHTML = "*Password: [Required]";
            formLabels[1].style.color = "red";
            isvalid = false;
        }
        
    else if(password.length<8)
    {
        formLabels[1].innerHTML = "*Password: Weak Password";
        formLabels[1].style.color = "red";
        isvalid = false;
    }
    else
    {
        formLabels[1].innerHTML = "*Password: Accepted";
        formLabels[1].style.color = "#04AA6D";
        isvalid = (isvalid) ? true : false;
    }

    
    return isvalid;
}
