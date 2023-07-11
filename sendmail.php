<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//Include files from folder PHPMailer
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
//Announcement plugin
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language');
$mail->IsHTML(true);
//ouner settings
//from whom mail
$mail->setFrom('nataliia.voroshylova@gmail.com', 'Nataliia Zabazhanova');
//for whom
$mail->addAddress('savephoto779@gmail.com')
//mail theme
$mail->Subject = 'WOrk with front-end develper Nataliia';
//mail body
$body = '<h1>Hello!</h1>';
//Check up fields
if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
}
//Include file
if (!empty($_FILES['image']['tmp_name'])) {
    $filePath = __DIR__."/files/". $_FILES['image']['name'];
    if (copy($_FILES['image']['tmp_name'], $filePath)) {
        $fileAttach = $filePath;
        $body.='<p><strong>Macket in appendix</strong>';
        $mail->addAttachment($fileAttach);
    }
}

$mail->body = $body;

//sending
if (!$mail->send()){
    $message = 'Error';
} else {
    $message = 'Sending successful';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>