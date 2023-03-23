
require('dotenv').config()

const {transporter, sendEmail}= require("./mailerService");


async function main(){

  // send mail with defined transport object

  let options={
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "dani.oscar.257@gmail.com", // list of receivers
    subject: "Hello 2 ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [
      {path: "file_test/google-offline-calls-results.csv"},
      {path: "file_test/google-offline-sales-results.csv"},
    ]
  }

  let info = await sendEmail(options);  
}
main();