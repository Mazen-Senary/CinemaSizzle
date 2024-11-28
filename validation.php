<?php
    $conn = mysqli_connect("localhost","root",null,"cinemsizzle");

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
        }


  else {
    $name = $_POST ['name'];
    $email = $_POST ['userEmail'];
    $pass = $_POST ['userPassword'];
    $phone = $_POST ['userPhone'];

    // echo ($name);
    // echo ($email);
    // echo ($pass);
    // echo ($phone);

    $duplicate = "SELECT * FROM sign_up WHERE userEmail='$email'";
    $dup_res = mysqli_query($conn , $duplicate);

    if (mysqli_num_rows($dup_res) > 0){
      //header("Location: sign_up.php?msg=Email already exists" );
      echo ("Email Exists");
    }

    else{

      $sql = "INSERT INTO sign_up (name , userEmail ,  userPassword ,userPhone) VALUES (?,?,?,?)";
      $insertstatement = mysqli_prepare($conn , $sql);

      mysqli_stmt_bind_param($insertstatement , 'sssi' , $name , $email ,  $pass , $phone);
      $res = mysqli_stmt_execute($insertstatement);

      
    //   header("Location: confirmation.php");

      
      }

  }
    
  mysqli_close($conn);


?>