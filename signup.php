<!DOCTYPE html>
<html lang="en">
<head>
    <title>Cinema Sizzle - Sign up</title>
    <meta charset="UTF-8">
	<meta name = "keywords" content = "Text,website">
	<meta name = "description" content = "Text website">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href="Styles/myStyle.css">
    <script src="JS/myScript.js"></script>
</head>
<body>
    
    <div class = "banner">
        <div id = "floatingMenu">
            <img src="images/buttonw.png" onclick="openNav()">
        </div>

        <div id="mySidenav" class="sidenav" >
            <input type="text" class="searchbar" placeholder="  What movie are you looking for?">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="home.html">Home</a>
            <a href="login.html">Login</a>
            <a href="about.html">About</a>
        </div>
        <img src = "images/3D.png" alt = "Image">    
    </div>
    <div class="topnav">
        <a class="active"> Sign Up</a>
        <a href="home.html" href = >Home</a>
        <a href="login.html" href = >Login</a>
        <a href="about.html">About</a>
        <input type="text" placeholder="Search..">
    </div>
    
        <form onsubmit="return signUpValidation()" method="post" name="regForm" action="validation.php">
            <div class = "credentials">
                <label>*Name: </label>
                <br>
                <input type = "text" name = "name" placeholder="Enter your name">
                <br>
                <br>
                <label>*Email:</label>
                <br>
                <input type="text" name = "userEmail" placeholder = "Enter your email">
                <br> 
                <br> 
                <label>*Password:</label>   
                <br>
                <input type = "password" name = "userPassword" placeholder="Enter your password">
                <br>
                <br>
                <label>*Phone Number: </label>
                <br>
                <input type = "tel" name = "userPhone" placeholder="Enter your phone number">
                <br>
                <br>
                <input type="submit" class = "loginbutton" value="Submit">
                <input type = "reset" class = "clearbutton" value="Clear All">
            </div>
        </form>
        <div id = "footer">&copyCinema Sizzle</div>
    
</body>
</html>