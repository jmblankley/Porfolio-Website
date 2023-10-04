import { send } from '@sendgrid/mail';
import { Response } from 'node-fetch'; // Import the Response class

// Set your SendGrid API key
sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function onRequest(request) {
  try {
    if (request.method === 'POST') {
      const formData = new URLSearchParams(await request.text());

      const name = formData.get('name');
      const phone = formData.get('phone');
      const email = formData.get('email');
      const message = formData.get('message');

      const msg = {
        to: 'recipient@example.com', // Replace with the recipient's email address
        from: 'sender@example.com', // Replace with your verified sender email
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
        // Add any additional options you need, such as HTML content
      };

      // Send the email using SendGrid
      await send(msg);

      // Return a success response
      return new Response('Email sent successfully.', {
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        },
      });
    } else {
      return new Response('Method not allowed.', {
        status: 405,
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        },
      });
    }
  } catch (error) {
    console.error(error);

    // Return an error response
    return new Response('Email could not be sent.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
    });
  }
}
