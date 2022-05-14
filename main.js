const opener = require("opener");
require('dotenv').config();

console.log("Hello, " + process.env.name + "!");

opener(process.env.url);
