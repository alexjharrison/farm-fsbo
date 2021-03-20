require('dotenv').config()
const nodemailer = require('nodemailer')

exports.handler = async function(event, context, callback) {
  let data = JSON.parse(event.body)
  let { name, email, message, phone } = data
  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.TO_EMAIL_ADDRESS,
    cc: [process.env.BCC_EMAIL_ADDRESS],
    replyTo: email,
    subject: `Message from miltonpafarm.com contact form`,
    text: `
    Name: ${name}
    Email: ${email || 'none'}
    Phone: ${phone || 'none'}
    Message: ${message}`
  }

  let transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  return transporter
    .sendMail(mailOptions)
    .then(() => {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.message = ''
      return {
        statusCode: 200,
        body: 'Message Sent Successfully'
      }
    })
    .catch((err) => ({
      statusCode: 500,
      body: JSON.stringify(err)
    }))
}

function parseQuery(queryString) {
  var query = {}
  var pairs = (queryString[0] === '?'
    ? queryString.substr(1)
    : queryString
  ).split('&')
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=')
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return query
}
