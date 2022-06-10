# demo-dotenv
The code sample for my demo-dotenv [tutorial](https://www.youtube.com/watch?v=0hAahRdB5eA).

## Dependencies
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.
* [opener](https://www.npmjs.com/package/opener) - It Opens Stuff in your desktop environment. This will make actual windows pop up, with stuff in them!

## Tutorial 
Follow along with this text tutorial, or watch the [video](https://www.youtube.com/watch?v=0hAahRdB5eA) going over all of this.

### Overview
Today, I'm going to show you how use the JavaScript library called `dotenv`, which is used to access environment variables in a NodeJS project.\
Environment variables can hold secret keys such as API keys, login credentials, or any other number of information you need to use, but want to keep hidden from the users/internet.

We will: 
1. [Start](https://github.com/cireneirbo/demo-dotenv/blob/main/README.md#getting-started) an empty NodeJS project.
2. [Create](https://github.com/cireneirbo/demo-dotenv#create-project-files) all necessary files for project.
3. [Import](https://github.com/cireneirbo/demo-dotenv#install-dotenv-library-dependencies) the `dotenv` library.
4. [Configure](https://github.com/cireneirbo/demo-dotenv#config-dotenv) `dotenv` environmental variables.
5. [Code](https://github.com/cireneirbo/demo-dotenv#create-hello-world-command) a command using `dotenv`.
6. [Code](https://github.com/cireneirbo/demo-dotenv#add-opener-and-create-opener-command) a more advanced command with `opener`.
7. [Wrap up](https://github.com/cireneirbo/demo-dotenv#preparing-to-push-to-github) the project with some git essentials.

So let's start!

### Getting Started
Create a folder for your project however you normally do. I am going to use the terminal, Bash:
* Navigate to wherever you'd like to save the demo and type:
```
mkdir demo-dotenv
```
* Just to make sure we have Node installed, type:
```
node -v
```
* If it doesn't tell you a version number, then you need to install node. Head over to https://nodejs.org/en/ and install the version for your OS and then come back.
* Let's also check if you have Git installed too, type:
```
git --version
```
* Same as before, if it doesn't tell you a version number, then you need to install git. Head over to https://git-scm.com/downloads and install the version for your OS and then come back.

Now we have a folder to work out of, and our set up out of the way. Let's open our IDE next. I use [VSCodium](https://vscodium.com/), but you can use whatever you want.
* Inside your IDE, open our project folder that we made already.

Now we have a fresh slate to work with.

### Create Project Files
Let's create some empty files in our new folder.\
Make them all in the top-level of the directory - meaning place them all in this folder without any other folders added for depth/nesting.
* Create a `main.js` file to run our code in.
* Create a `.env` file to keep our variables in.
* Create a `.gitignore` to follow best practices and avoid pushing unwanted files to GitHub.
* Create a `.env-sample` file to use as an example for the future.

### Install `dotenv` Library Dependencies
Before we start installing libraries, let's get our `package.json` file.
* In the terminal, type:
```
npm init
```

Let's go to [npm's dotenv page](https://www.npmjs.com/package/dotenv) to find the package and get downloading and usage instructions.

* In the terminal, type: 
```
npm i dotenv
```

This installs the library so we can use it in our project.

### Config Dotenv
Now we need to import it properly.\
If you check the [npm site](https://www.npmjs.com/package/dotenv), it says we need to add this near the top of `main.js` (always keep at the bottom of any other imports you might add to your own projects):
```main.js
require('dotenv').config();
```

This is a bit different than most packages, and should always be kept at the bottom of your imports, and above any code you're calling an environment variable with.\
Great! Now we have our project ready to code!

### Create "Hello World" Command
Let's start coding!
* Below the `dotenv` import, type:
```main.js
console.log("Hello, " + process.env.name + "!");
```

This will give us a "Hello World"-type message when we run it correctly. But, first we need to assign our name to the environment variable `name`.

* Go to the `.env` file and add:
```
name="User"
```
* Save your project and we are ready to run it.

* In the terminal, type:
```
node main.js
```

It works! Cool!
```
Hello User!
```

### Add `opener` and Create "Opener" Command
Now let's add something a bit more useful to give you a better idea of how to use environment variables.

Go to the [npm opener](https://www.npmjs.com/package/opener) website. `opener` is a library that allows us to automatically open a website in a new browser tab/window.

* Install `opener` in your project directory's terminal with:
```
npm i opener
```

* Let's import it to `main.js` now. At the top of the `main.js` (above the `dotenv` config) type:
```main.js
const opener = require('opener');
```

* Then, at the bottom of your `main.js` file type:
```main.js
opener(process.env.url);
```

This will call whatever URL we have at the `.env` variable `url`. But that variable doesn't exist yet, so let's go fix that!

* On a new line in `.env`, type:
```
url="https://nodejs.org/en/"
```

This will open the NodeJS website when we run our program. Let's test it out now.

* In the terminal run:
```
node main.js
```

Pretty cool, huh?

### Preparing to Push to GitHub
One last thing to know is that `.env` (or `node_modules/` because they take up too much unnecessary space) files should never be uploaded to Github or any other version control system. If you do, anyone can read your private environment variables!

To get around this, we need a `.gitignore` file. This is usually created for you as an option if you make a new project with GitHub, but we will do it from scratch.

* Previously, we created a `.gitignore` file. Open it, and inside add:
```
node_modules/
.env
```

This will now exclude your `.env` file and `node_modules/` from ever being uploaded with git to a version control. 
We will want to create a sample `.env` to show our potential users (or just remind ourselves in the future) what to do with their `.env` file if they are going to use our program themselves.

* In our `.env-sample` file, add:
```.env-sample
name="your-name"
url="your-url"
```

This `.env-sample` will upload to version control because it isn't listed in our `.gitignore` file. It is merely there as a reference, and it has no sensitive information. This is crucial when using a private API key or secrets.

Well there you have it folks. `dotenv` in all of it's glory! Good luck and have fun! :)
