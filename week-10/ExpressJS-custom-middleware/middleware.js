// Your code here

module.exports.authAdmin = function (req,res,next) {
  if (req.user.role === "admin") {
    next()
  } else {
    res.redirect("/login")
  }
}

module.exports.authEditor = function (req,res,next) {
  if (req.user.role === "admin" || req.user.role === "editor") {
    next()
  } else {
    res.redirect("/login")
  }
}


// module.exports = {authAdmin, authEditor} ;

// Don't forget to export the functions you just created
