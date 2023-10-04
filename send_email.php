<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Your SMTP settings
    $smtp_server = "smtp.sendgrid.net";
    $smtp_port = 587; // Usually 587 for TLS
    $smtp_username = "apikey";
    $smtp_password = "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";
    
    // Recipient email address
    $to_email = "jmblankley@outlook.com";
    
    // Email subject
    $subject = "Contact Form Submission from $name";
    
    // Email headers
    $headers = "From: $email";
    
    // Email body
    $email_body = "Name: $name\nPhone: $phone\nEmail: $email\nMessage:\n$message";
    
    // Send email
    if (mail($to_email, $subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
