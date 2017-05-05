<?php
    $myemail = 'k4rpog@gmail.com';
    if (isset($_POST['email'])) 
    {
        $email = strip_tags($_POST['email']);
        $temat = strip_tags($_POST['temat']);
        $wiadomosc = strip_tags($_POST['wiadomosc']);

        $msg_success = "";
        $msg_fail = "Error sending mail.";
        $msg_success .= "<span class=\"alert alert-success\" >Your message has been received. Thanks! Here is what you submitted:</span><br><br>";
        $msg_success .= "<stong>Name:</strong> ".$email."<br>";   
        $msg_success .= "<stong>Email:</strong> ".$temat."<br>"; 
        $msg_success .= "<stong>Message:</strong> ".$wiadomosc."<br>";

        $to = $myemail;
        $email_subject = "Contact form submission: $temat";
        $email_body = "You have received a new message. ".
        " Here are the details:\n Name: $email \n ".
        "Email: $email\n Message \n wiadomosc";
        $headers = "From: $myemail\n";
        $headers .= "Reply-To: $email";

        if(mail($to,$email_subject,$email_body,$headers))
            echo $msg_success;
        else
            echo $msg_fail;
    }
    else
        echo "Input parameters missing";
?>
