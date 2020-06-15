/**
 Copyright 2020 Arkadip Bhattacharya

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const axios = require('axios');
const emailRouter = require('express').Router();

const emailModel = require('../models/emailModel');
const sgMail = require('../utils/mailConfig');

let reCaptchaKey, MAIL_SENDER, MAIL_REPLYTO;
if (process.env.NODE_ENV === 'production') {
  reCaptchaKey = process.env.recapta;
  MAIL_SENDER = process.env.MAIL_SENDER;
  MAIL_REPLYTO = process.env.MAIL_REPLYTO;
}
else {
  const config = require('../../devconfig');
  reCaptchaKey = config.recapta;
  MAIL_SENDER = config.MAIL_SENDER;
  MAIL_REPLYTO = config.MAIL_REPLYTO;
}

emailRouter.post(`/`, async (req, res) => {
  const git_name = req.body.git_name;
  const git_email = req.body.git_email;
  const git_mob = req.body.git_mob;
  const git_msg = req.body.git_msg;
  const g_recap = req.body.g_recap;

  try{
    if (await checkReCaptcha(g_recap)) {
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
      return res.status(400).json({ error: 'ReCaptcha validation error' })
    }
  }
  catch (e) {
    return res.status(403).json({error: 'ReCaptcha validation error'})
  }

});

/**
 * Check the ReCaptcha and returns boolean
 * @param recaptchaToken {String} The ReCaptcha response from frontend
 * @returns {Promise<*|boolean>}
 */
checkReCaptcha = async (recaptchaToken) => {
  try {
    const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${reCaptchaKey}&response=${recaptchaToken}`);
    return res.data.succcess;
  }
  catch (e) {
    return e
  }

};

/**
 * Check if the parameter is a valid person's name
 * @param name {String}
 * @returns {boolean}
 */
validName = (name) => {
  if (name.length > 0) {
    return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(name);
  }
  else {
    return false
  }
};

/**
 * Check if the parameter is a valid email-id
 * @param email {String}
 * @returns {boolean}
 */
validEmail = (email) => {
  if (email.length > 0) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  else {
    return false
  }
};

sendMail = (git_name, git_email, git_mob, git_msg) => {

  sgMail.send({
    to: git_email,
    from: MAIL_SENDER,
    replyTo: MAIL_REPLYTO,
    subject: 'Thanks for connecting with me 😀',
    html: `<p> Hi <b>${git_name}</b>, Thanks for connecting. I will connect with you`
  })
    .then((x) => { console.log("Msg Send: ",x[0].complete) }, console.error);

  sgMail.send({
    to: MAIL_REPLYTO,
    from: MAIL_SENDER,
    subject: 'Someone was recently connected with you',
    html: `${git_name}, recently connected with you`
  })
    .then((x) => { console.log("Msg Send: ",x[0].complete) }, console.error);
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
