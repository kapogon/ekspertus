<?php

require_once 'class.phpmailer.php';

$_POST = array_map('trim', $_POST);

$error = false;

if (!isset($_POST['email']) || empty($_POST['email']) || !PHPMailer::ValidateAddress($_POST['email'])) {
    $error = true;
}

if (!isset($_POST['temat']) || empty($_POST['temat'])) {
    $error = true;
}

if (!isset($_POST['wiadomosc']) || empty($_POST['wiadomosc'])) {
    $error = true;
}

if ($error) {
    exit('nok');
}

$mail = new PHPMailer();

$mail->CharSet = 'UTF-8';

$mail->SetFrom($_POST['email']);
$mail->AddAddress('k4rpog@gmail.com');
$mail->Subject = $_POST['temat'];
$mail->Body = $_POST['wiadomosc'];

if (!$mail->Send()) {
    exit('nok');
}

exit('ok');