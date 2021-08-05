const express = require('express');
const app = express();

let usersRouter = require('./api/src/routes/users/users');

app.use('/',usersRouter);

app.listen(3000,()=>console.debug('server started'));

module.exports = app;