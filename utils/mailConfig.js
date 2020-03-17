const sgMail = require('@sendgrid/mail')

let SENDGRID_API;
if (process.env.NODE_ENV === 'production') {
    SENDGRID_API = process.env.SENDGRID_API
}
else {
    const config = require('./../devconfig');
    SENDGRID_API = config.SENDGRID_API;
}

sgMail.setApiKey(SENDGRID_API);

module.exports = sgMail;