# demo-dotenv
The code sample for my demo-dotenv [tutorial](https://www.youtube.com/watch?v=0hAahRdB5eA).

## Dependencies
* [dotenv](https://www.npmjs.com/package/dotenv)
* [opener](https://www.npmjs.com/package/opener)

## Tutorial 
Follow along with this text tutorial, or watch the [video](https://www.youtube.com/watch?v=0hAahRdB5eA) going over all of this.

### Overview
Today, I'm going to show you how use the JavaScript library called `dotenv`, which is used to access environment variables in a NodeJS project.\
Enivornment variables can hold secret keys such as API keys, login credentials, or any other number of information you need to use, but want to keep hidden from the users/internet.

We will: 
* Start an empty NodeJS project.
* Download the library `dotenv`.
* Import the library.
* Create some boilerplate code in `main.js`.
* Set up the `.env` file.
* Create some environmental variables.
* Then run the code to call the variables in the `main.js` file.

Then we will be creating a slightly more advanced example with the npm library `opener` to open a website url hidden as an environment variable.\
So let's start!

### Getting Started
Create a folder for your project however you normally do. I am going to use the terminal, Bash:
* Navigate to wherever you'd like to save the demo and type:
	* `mkdir demo-dotenv`
* Just to make sure we have Node installed, type:
	* `node -v`
If it doesn't tell you a version number, then you need to install node. Head over to https://nodejs.org/en/ and install the version for your OS and then come back.

* Let's also check if you have Git installed too, type:
	* `git --version`

Same as before, if it doesn't tell you a version number, then you need to install git. Head over to https://git-scm.com/downloads and install the version for your OS and then come back.

Now we have a folder to work out of, and our set up out of the way. Let's open our IDE next. I use [VSCodium](https://vscodium.com/), but you can use whatever you want.\
* Inside your IDE, open our project folder that we made already.

Now we have a fresh slate to work with.

### Create Project Files
We will make a `main.js` file to run our code in.\
And a `.env` to keep our variables in.

### Install `dotenv` Library Dependencies

Let's go to npm dotenv to find the package and get downloading and usage instructions.

type `npm i dotenv` in the terminal
this installs the library so we can use it in our project.

### Config Dotenv
Now we need to import it properly. If you check the npm site it says we need to do this:

require('dotenv').config();

at the top of main.js

This is a bit different than most packages, and should always be kept at the bottom of your imports, and above any code you're calling an environment variable with.

### Create "Hello World" Command
Then we can start coding.
Type 
console.log("Hello, " + process.env.name + "!");

This will give us a Hello World type message when we run it. But, first we need to assign our name to the environment variable "name".

Go to the .env file and add
name="Eric"

Save your project and we are ready to run it.

In the terminal, type 
node main.js

It works! Cool!

### Add `opener` and Create "Opener" Command
Now let's add something a bit more useful to give you a better idea of how to use environment variables.

Got to the npm opener website. opener is a library that allows us to automatically open a website in a new window.

install opener in your project terminal with
npm i opener

Let's import it to main.js now.
type 
const opener = require('opener');
at the top

then at the bottom of your main.js script type
opener(process.env.url);

This will call whatever we have at the .env variable url. But it doesn't exist yet, so let's go fix that.

in .env, type
url="https://nodejs.org/en/"
on a new line

This will open the NodeJS website when we run our program. Test it out now.

In the terminal run
node main.js

Pretty cool, huh?
### Preparing to Push to GitHub
One last thing to know is that .env files should never be uploaded to Github or any other version control system. If you do, anyone can read your private environment variables!

To get around this, we need a gitignore file. This is usually created for you if you make a new project with github, but we will do it from scratch.

create a file called .gitignore
inside type .env
This will exclude your .env file from ever being uploaded with git to a version control. 
We will want to create a sample env to show our potential users what to do with their .env file if they are going to use our program themselves.

Create a `.env-sample` file
inside, type
name="your-name"
url="your-url"

and save.

This will upload to version control because it isn't listed in our .gitignore file, but it has no sensitive information. This is crucial when using a private API key.

Well there you have it folks. dotenv in all of it's glory! Have fun and good luck!
