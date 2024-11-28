<?php
        $conn = mysqli_connect("localhost","root",null,"cinemsizzle");

        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
            }
        else{
            $email = $_POST['username'];
            $pwd = $_POST['Userpass'];

            $sql = "SELECT * FROM sign_up WHERE userEmail = '$email'";
            $q = mysqli_query($conn , $sql);
            //$results = mysqli_fetch_assoc($q);

            if (mysqli_num_rows($q) > 0){
                $getdata = mysqli_fetch_assoc($q);
                if ($getdata['userPassword'] === $pwd){
                    // session_start();
                    // $_SESSION ['id'] = $getdata['User_id'];
                    // $_SESSION ['Name'] = $getdata['Name'];
                    // $_SESSION ['mail'] = $getdata['Email'];
                    
                   echo ("Login Successful !");
                    
                }
                else {
                    echo"<script>alert('invalid email or password')</script>";
                }
            }

            else {
                echo"<script>alert('invalid email or password')</script>";
            }
            
        }
?>