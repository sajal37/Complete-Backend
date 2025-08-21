function m1(req, res, next) {
    console.log("running middleware 1");
    req.user={
        id:1,
        username:"Nitesh"
    }
}
function m2(req, res) {
    console.log("running middleware 2");
    console.log(req.user);
    req.isAdmin=true;
}
module.exports.m1=m1;
module.exports.m2=m2;