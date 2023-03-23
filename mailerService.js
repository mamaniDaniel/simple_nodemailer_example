const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: process.env.MAIL_SERVICE_HOST,
  port: process.env.MAIL_SERVICE_PORT,
  secure: process.env.MAIL_SERVICE_SECURE, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_SERVICE_USER, // generated ethereal user
    pass: process.env.MAIL_SERVICE_PASS, // generated ethereal password
  },
});

transporter.verify()
  .then(()=> console.log('Ready for send emails'))
  .catch((err)=> console.log(err));


/*
  OPTIONS EXAMPLE:
  let options={
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "dani.oscar.257@gmail.com", // list of receivers
    subject: "Hello 2 ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [
      {path: "file.csv"},
      {path: "file2.csv"},
    ]
  }
*/
let sendEmail= async (options)=>{
  let info = await transporter.sendMail(options);
  console.log("Message sent: %s", info.messageId);
  return info;
}

module.exports = { transporter, sendEmail };