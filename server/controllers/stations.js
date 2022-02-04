import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

export const contact = async (req,res) => {
    {
        console.log(req.body.Name);
      const name = req.body.Name;
      const email = req.body.Email;
      const message = req.body.Message; 
      const mail = {
        from: email,
        to: process.env.GMAIL_RECEIVER,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
      };
      contactEmail.sendMail(mail, (error) => {
        if (error) {
          res.json({ status: "Error" });
        } else {
          res.json({ status: "Message Sent" });
        }
      });
    }
}