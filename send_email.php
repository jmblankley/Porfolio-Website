<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email recipient
    $to = "jmblankley@outlook.com"; // Replace with the recipient's email address

    // Email subject
    $subject = "New Contact Form Submission";

    // Email message
    $email_message = "Name: $name\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Email could not be sent.";
    }
}
?>

