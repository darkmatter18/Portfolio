module.exports = (app) => {

  app.post(`/api/email`, (req, res) => {
    const git_name = req.body.git_name;
    const git_email = req.body.git_email;
    const git_mob = req.body.git_mob;
    const git_msg = req.body.git_msg;
    console.log(git_name);
    return res.status(200).json({status: 'Y'})
  })
}