##User stories for bus mall:

#As a marketing research team member:
#1.
As a marketing research team member, I will make sure my purpose on why I am doing this marketing study is clear.

#2.
As a marketing research team member, I will make sure my directions are simple and laid out step by step.

#3.
As a marketer, I will make sure my users feel comfortable exiting the survey if needed.

#4.
As a marketer, I will thank my participants and provide an email for further questions.


#As a focus group participant:
#1.
As a user, I would like to know what I will get from completing the survey, or who I am helping, what company?

#2.
As a user, I would like to have clear instructions. And know how long this will take me.

#3.
As a user, I would like to be able to start over if I need to or know what to do if I click on something incorrectly.

#4.
As a user, I would like to be congratulated on finishing the survey! ;)

#As a developer:
#1.
As a developer, I will create a counter so the user knows exactly how many clicks they have left. This is not required so it is a stretch goal and not necessary so if I do not have time I will make sure I include that this study usually takes under a minute to complete.

#2.
As a developer, I will report the findings of the study back to the user at the end of the 25 clicks and thank them for participating.

#3.
As a developer, I will sure the instructions are clear and easy to read.

#4.
As a developer, I will make sure that the survey is suitable for all age ranges and all communities.


##Checklist for day 1:
1. Create repo with appropriate files (index.html, busmall.css, reset.css, app.js, user_stories.md, image folder)
2. Draft up 5 user stories stating what you will commit to doing as a developer for your users
3. Compile photos in image folder
4. Create a branch for day 1 html and js work 
4. Create wireframe design
5. Create html

6. Select three random photos from the image directory and display them side-by-side-by-side in the browser window.
7. Be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.
8. Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.
9. Create a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image (to be used for display purposes), its filepath, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.
10. After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".
