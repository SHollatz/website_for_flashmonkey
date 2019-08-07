var db = require("../models");
// let bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = function(app) {
  app.get("/api/user", function(req, res1) {
    console.log("res1: ", res1)
    console.log("inside get, req.query.email: ", req.query.email);
    db.User.findAll({where: {email: req.query.email}}).then(function(dbUser) {
      console.log("dbUser: ", dbUser);
      console.log("res1: ", res1);
      if (req.query.email === dbUser[0].email || req.query.userName === dbUser[0].userName) {
        bcrypt.compare(req.query.password, dbUser[0].password, function(err, res) {
          console.log("res: ", res);
          if (err) {
            console.log("error in get apiRouts: ", err);
          }
          if (res == true) {
            console.log("password check successful.: ", res);
            res1.jsonp({success: res, firstName: dbUser[0].firstName});
          }
          else {
            console.log("password NOT the same: ", res)
            res1.send(res);
          }
        });
      }
    });
  });

  app.post("/api/user", function(req, res) {
    console.log("inside post", req.body)
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      let encryptedUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.userName,
        password: hash
      }
      console.log("encryptedUser: ", encryptedUser)
      // console.log("db.User: ", db.User)
      // const user = req.body
      db.User.create(encryptedUser).then(function(dbUser) {
        res.json(dbUser);
      });
    })
  });
};
