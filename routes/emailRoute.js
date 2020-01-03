const axios = require('axios');
const S = '6LcGQncUAAAAAC567n0sA2qi_7ebg3QoZmPxBX1K'


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
        sendMail(git_name, git_email, git_mob, git_msg)
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
    await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${S}&response=${g_recap}`)
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
}