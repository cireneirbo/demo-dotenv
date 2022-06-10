const opener = require("opener"); /* Declares the library 'opener'. Allows us to use it in this file. */
require('dotenv').config(); /* Declares and configures library 'dotenv', which allows us to use environmental variables stored in a '.env' file. */

console.log("Hello, " + process.env.name + "!"); /* Sends a message to the console(terminal) using our '.env' variable 'name'. */

opener(process.env.url); /* Opens a website in a new tab using our 'url' variable stored in '.env'. */
