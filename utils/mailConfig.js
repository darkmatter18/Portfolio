const nodemailer = require('nodemailer');

let mail_host, mail_port, mail_user, mail_pass, mail_replyto, mail_secure;
if (process.env.NODE_ENV === 'production') {
    mail_host = process.env.mail_host;
    mail_port = process.env.mail_port;
    mail_user = process.env.mail_user;
    mail_pass = process.env.mail_pass;
    mail_replyto = process.env.mail_replyto;
    mail_secure = process.env.mail_secure;
}
else {
    const config = require('./../devconfig');
    mail_host = config.mail_host;
    mail_port = config.mail_port;
    mail_user = config.mail_user;
    mail_pass = config.mail_pass;
    mail_replyto = config.mail_replyto;
    mail_secure = config.mail_secure;
}

const transporter = nodemailer.createTransport({
    host: mail_host,
    port: mail_port,
    secure: mail_secure,
    auth: {
        user: mail_user,
        pass: mail_pass
    }
});

module.exports = transporter;