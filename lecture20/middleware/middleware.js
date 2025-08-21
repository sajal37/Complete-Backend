function m1(req, res, next) {
  console.log("running middleware 1");
  req.user = {
    id: 1,
    name: "sajal",
  };
  next();
}

function m2(req, res, next) {
  console.log("runnning middleware 2");
  console.log(req.user);
  next();
}

function checkAdmin(req, res, next) {
  console.log("running chekAdmin middleware");

  let { name } = req.query;
  if (name == "sajal") {
    req.isAdmin = true;
    return next();
  }

  return res.json({
    success: false,
    message: "you are not an admin",
  });
}
function isLogin(req, res, next) {
    console.log("running isLogin middleware");
    next();
}
module.exports.m1 = m1;
module.exports.m2 = m2;
module.exports.checkAdmin = checkAdmin;
module.exports.isLogin = isLogin;
