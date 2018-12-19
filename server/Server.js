'use strict'

const express = require('express');
const path = require('path');
var bodyParser = require("body-parser");

const DatabaseManager = require("./DatabaseManager.js");
const ContactHandler = require("./ContactHandler.js");

var app = express();
app.use(bodyParser.json());

DatabaseManager.init().then(() => 
{
    var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("|App now running on port", port);
  });
});

//Endpoints
app.use(express.static(path.join(__dirname, '../client/build')));
app.get("/api/contacts", ContactHandler.fetchContacts);
app.post("/api/contacts", ContactHandler.insertContact);
