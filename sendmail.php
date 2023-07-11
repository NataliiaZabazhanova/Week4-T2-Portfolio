<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

// Create a new PHPMailer instance
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language');
$mail->IsHTML(true);

// Sender settings
$mail->setFrom('nataliia.voroshylova@gmail.com', 'Nataliia Zabazhanova');

// Recipient
$mail->addAddress('savephoto779@gmail.com');

// Mail subject
$mail->Subject = 'Work with front-end developer Nataliia';

// Mail body
$body = '<h1>Hello!</h1>';

// Check form fields
if (!empty(trim($_POST['name']))) {
    $body .= '<p><strong>Name:</strong> ' . $_POST['name'] . '</p>';
}
if (!empty(trim($_POST['email']))) {
    $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p>';
}
if (!empty(trim($_POST['message']))) {
    $body .= '<p><strong>Message:</strong> ' . $_POST['message'] . '</p>';
}

// Include file
if (!empty($_FILES['image']['tmp_name'])) {
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    if (copy($_FILES['image']['tmp_name'], $filePath)) {
        $fileAttach = $filePath;
        $body .= '<p><strong>Mockup in appendix</strong></p>';
        $mail->addAttachment($fileAttach);
    }
}

$mail->Body = $body;

// Sending
if (!$mail->send()) {
    $message = 'Error';
} else {
    $message = 'Sending successful';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
