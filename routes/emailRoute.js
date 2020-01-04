const axios = require('axios');
const nodemailer = require('nodemailer');

let recapta, mail_host, mail_port, mail_user, mail_pass, mail_replyto;
if (process.env.NODE_ENV === 'production') {
  recapta = process.env.recapta;
  mail_host = process.env.mail_host;
  mail_port = process.env.mail_port;
  mail_user = process.env.mail_user;
  mail_pass = process.env.mail_pass;
  mail_replyto = process.env.mail_replyto;
}
else {
  const config = require('./../config');
  recapta = config.recapta;
  mail_host = config.host;
  mail_port = config.port;
  mail_user = config.user;
  mail_pass = config.pass;
  mail_replyto = config.replyto;
}

module.exports = (app) => {
  app.post(`/api/email`, (req, res) => {
    const git_name = req.body.git_name;
    const git_email = req.body.git_email;
    const git_mob = req.body.git_mob;
    const git_msg = req.body.git_msg;
    const g_recap = req.body.g_recap;
    if (checkRecapta(g_recap)) {
      if (validName(git_name) && validEmail(git_email)) {
        //send mail
        sendMail(git_name, git_email, git_mob, git_msg);
        return res.status(200).json({ status: 'Y' })
      }
      else {
        return res.status(400).json({ error: 'name or email is not present' })
      }
    }
    else {
      return res.status(400).json({ error: 'recapta validation error' })
    }
  });

  checkRecapta = async (g_recap) => {
    await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${recapta}&response=${g_recap}`)
      .then((res) => {
        console.log("Recaptcha Request Success");
        return res.data.success;
      })
      .catch((error) => {
        console.log('Error: ', error);
        return false;
      })
  }

  validName = (name) => {
    if (name.length > 0) {
      return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(name);
    }
    else {
      return false
    }
  }

  validEmail = (email) => {
    if (email.length > 0) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    else {
      return false
    }
  }

  sendMail = (git_name, git_email, git_mob, git_msg) => {
    const transporter = nodemailer.createTransport({
      host: mail_host,
      port: mail_port,
      secure: true,
      auth: {
        user: mail_user,
        pass: mail_pass
      }
    });

    // Mail to the form filler
    transporter.sendMail({
      from: mail_user,
      to: git_email,
      replyTo: mail_replyto,
      subject: 'Thanks for connecting with me 😀',
      html: `<p> Hi <b>${git_name}</b>, Thanks for connecting. I will connect with you`
    }, (e, i) => {
      if (e) {
        console.log(e);
      }
      else{
        console.log('Message %s sent: %s', i.messageId, i.response);
      }
    });

    //Mail to me
    transporter.sendMail({
      from: mail_user,
      to: mail_replyto,
      subject: 'Someone was recently connected with you',
      html: `${git_name}, recently connected with you`
    }, (e, i) => {
      if (e) {
        console.log(e);
      }
      else{
        console.log('Message %s sent: %s', i.messageId, i.response);
      }
    });
  }
}