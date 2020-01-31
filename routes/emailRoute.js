const express = require('express');
const axios = require('axios');
const emailRouter = express.Router();

const emailModel = require('./../models/emailModel');
const mailTransporter = require('./../utils/mailConfig');

let recapta;
if (process.env.NODE_ENV === 'production') {
  recapta = process.env.recapta;
}
else {
  const config = require('./../devconfig');
  recapta = config.recapta;
}

emailRouter.post(`/email`, (req, res) => {
  const git_name = req.body.git_name;
  const git_email = req.body.git_email;
  const git_mob = req.body.git_mob;
  const git_msg = req.body.git_msg;
  const g_recap = req.body.g_recap;

  if (checkRecapta(g_recap)) {
    if (validName(git_name) && validEmail(git_email)) {
      //send mail
      saveDB(git_name, git_email, git_mob, git_msg);
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
};

validName = (name) => {
  if (name.length > 0) {
    return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(name);
  }
  else {
    return false
  }
};

validEmail = (email) => {
  if (email.length > 0) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  else {
    return false
  }
};

sendMail = (git_name, git_email, git_mob, git_msg) => {

  // Mail to the form filler
  mailTransporter.sendMail({
    from: mail_user,
    to: git_email,
    replyTo: mail_replyto,
    subject: 'Thanks for connecting with me 😀',
    html: `<p> Hi <b>${git_name}</b>, Thanks for connecting. I will connect with you`
  }, (e, i) => {
    if (e) {
      console.log(e);
    }
    else {
      console.log('Message %s sent: %s', i.messageId, i.response);
    }
  });

  //Mail to me
  mailTransporter.sendMail({
    from: mail_user,
    to: mail_replyto,
    subject: 'Someone was recently connected with you',
    html: `${git_name}, recently connected with you`
  }, (e, i) => {
    if (e) {
      console.log(e);
    }
    else {
      console.log('Message %s sent: %s', i.messageId, i.response);
    }
  });
};

saveDB = (git_name, git_email, git_mob, git_msg) => {
  emailModel.collection.insertOne({
    name: git_name,
    email: git_email,
    phone: git_mob,
    git_msg: git_msg
  })
    .then((s) => {
      console.log("Successfully inserted record to DB");
      console.log("Inserted %s, id: %s", s.insertedCount, s.insertedId);
    })
    .catch((e) => {
      console.log("Failed to insert record to DB");
      console.log(e);
    });
};

module.exports = emailRouter;