# Numbery or NaNy: development strategy

Building this site one step at a time

## 0. Setup

> * I created folders (handlers-listeners,data),index.html,style.css,log.js,init.js,development-strategy.md,README.md.
> * listners->(reset.js,saveinput.js,removeinput.js),handlers->(reset.js,saveinput.js,removeinput.js).

## 1. Data & Log

> * data is already created with enteries.js file , log.js is created .
> * log.js --> creation a log state object to log the program steps.
  * I some times used alert(), to send a message to the uesr with the current updates instead of using logs .

## 2. Init

> * chnage -> init.js
> * on windows load , render the ui with the current status as an initilization step.

## 3. User Story: as s user I want enter an input string so I can catogrize as nan or number. 

> * handling and validating user input is the first logic step.
> * listeners->saveinput.js , handlers -> saveinput.js
> * apply handling steps when save number button is clicked .

## 4. User Story: as a user I want to have a reset button so I can return back to no data state.

> * listeners->reset.js , handlers -> reset.js
> * apply logic to clear state object to zero state when reset button is clicked by the user .

## 5. User Story: as a user I want to enter an input string to remove form the stored lists .

> * listeners->removeinput.js , handlers -> removeinput.js
> * add feature to the program so the user can enter a value that is already stored and try to remove it .
> * first we have to add some validation and handling to the user input then apply the removing logic . 
