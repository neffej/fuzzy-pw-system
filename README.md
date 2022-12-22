# fuzzy-pw-system

## Description

I was given a suite of code that creates a website called Password Generator, without the javascript logic.  I created logic in JS to produce a password that the user can define as:
* between 8 and 128 characters
* using lower case characters
* using upper case characters
* using numbers
* using special characters

## Current Bugs
* In VS Code, the code would return a message should the user not choose any character type.  However, that feature has stopped working when I launched the Github Page and I'm unsure why.

* If a user selects too few or too many characters, then corrects their choice, the page will run through the character selection prompts twice.

* If the user in the scenario above clicks "ok" on any character type, the generator will return a password of the original length (the one outside parameters that should not be accepted).

## Installation
The website is accessible at the links below. You can navigate there with any functional web browser.

## Usage
Navigate to the webpage. Click "Generate Password," then follow the prompts.

## Links
https://github.com/neffej/fuzzy-pw-system

https://neffej.github.io/fuzzy-pw-system/
##



### References
I used the following websites to give me an idea of where to start on this project.  They introduced me to methods such as charAt and Math.random which I used in my code.  

https://www.w3schools.com/jsref/met_win_confirm.asp

https://w3collective.com/random-password-generator-javascript/