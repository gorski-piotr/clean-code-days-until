# clean-code-days-until
Coding exercise

The task was to refactor the given code according to the Clean Code Concept. I started with changing the name of the variables to make them more descriptive. I made them global to be able to use them in the functions I was going to create. 

Next, I started extracting the code in tiny little functions until I was not able to extract anymore. I used descriptive names, so it is easy to understand for anyone who is going to read the code. I made sure that each of the functions do only one thing. For example from the function “showDaysUntil()” I extracted another function “countDaysUntil()” and created a reference to it instead of counting Days inside the “showDayUntil()” function. 

I have also created a “showAllDays()” function which contains references to function “showDaysUntil()”. We can create as many references as we want (to display days until different dates) and the code still looks clean, we do not repeat the code.

The DOM manipulation has been done with jQuery like it was in the original code. 

I have also changed the month parameters in the “Date” objects as 0 stands for January, 1 for February an so on, until 11 which stands for December. At the end I have added “+1” to the actual number of the days because when we parse the value into the integer number, it displays only the integer part of the number (rounded down). I want to round the number up for example when the result of counting day is 1.5 I want to display 2 days instead of 1 day.

I found the task very interesting and I think adhering to the Clean Code Rules make the code more understandable for people who read the code as well as it is easier to make any changes in it.
