// https://myaccount.google.com/security <put this on>
const path = require("path");
const nodemailer = require('nodemailer');
const config  = require('./config');
const cities = [
    {
      "to": "lalit@hometown.in",
      "subject": `Test Report ${Date()}`,
      "text": "Test Report File",
      "attachments": [
        {   
          "filename": "tests_output.zip",
          "content": "Report",
          "path": path.join(__dirname, 'tests_output.zip')
        }
      ]
    }
  ];

let transporter = nodemailer.createTransport(config);

//send mail to city users
console.log('Sending mail to users ...');
cities.forEach((id) => {
  let mailOptions = {
    ...id,
    from: 'lsukhwal29@gmail.com',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('success');
    }
  });
});