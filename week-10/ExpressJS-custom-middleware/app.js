/****************************************************/
const express = require('express');                 //
const bodyParser = require('body-parser');          //
const cookieParser = require('cookie-parser');      //
const roleSetter = require('./utils/role-setter');  //
                                                    //
const app = express();                              //
                                                    //
                                                    //
app.use(roleSetter);                                //
/****************************************************/
/* Environment setup. Do not modify the above code. */ 




/* IMPORT MIDDLEWARE FILE HERE: */
// ...
const auth = require("./utils/middleware.js")


// Only 'admin' users should enter this endpoint
app.get('/delete-posts', auth.authAdmin, (req, res, next) => res.redirect('/admin-panel'));
 
  
// Only 'admin' users should enter this endpoint
app.get('/delete-users', auth.authAdmin,  (req, res, next) => res.redirect('/admin-panel'));
 


// Only 'admin' or 'editor' users should enter this endpoint
app.get('/create-posts', auth.authEditor, (req, res, next) => res.redirect('/posts-panel'));
 
 
// Only 'admin' or 'editor' users should enter this endpoint
app.get('/edit-posts', auth.authEditor, (req, res, next) => res.redirect('/posts-panel'));
 



 
/* Environment setup. Do not modify the below code. */
/****************************************************/
module.exports = app;
/****************************************************/
