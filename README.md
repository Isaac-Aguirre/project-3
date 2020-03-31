### Snapchat Twitter Combo piece
* A twitter where you can post things to a feed that people that have subscribed to you can see
* Personal dm’s
* The twist is that you can choose to have your post only be available for a certain amount of time to the public
* Personal dms can also be made to only be available once or have an expiration
 
 
## MySQL & Sequlize //Rob
* store posts
* store users and their profile
* posts are going to have a user id attached to them 
* like function to posts 
* location string allowed null if location then append button to show location on card.
* api calls for user will be a /users
* api calls for the posts will be /post
 
## Recharts
* analytics for the dashboard-
 
## Google Api(s)
* link location of posts //Armen
* use to logging with your google //Isaac
 
## Express //Rob + Isaac
* handling api routes 
 
## react // Sadiq
* design and update the page
* sass for frame work
 
## Passportjs // Isaac
* local strategy 
* google, facebook
* /login /register
 
## News Api // Armen
* fabricate posts about the news on a news account
 
### Landing Page (logged out) // Isaac
* sign up / sign in page 
* /
 
### Landing Page (logged in) // general
* followed page/ trending / suggestions
* sidebar your account / make a post
* navbar signout / view account 
* /
 
## Account Dashboard //general
* your followers / who follows you
* edit account button
* Profile pic 
* /profile
 
## Direct messages // Isaac
* message other users on the website
 
## Search Page // general
* search for trends / people 
* /search



## Subscribe
1. Backend User has a prop called followed and followers and they are going to be strings that are stringified arrays
2. Is going to grab the followed from the user that is following a new person and add the new person into an array and then stringify and push to backend
3. User that is being followed is going to get the name or id of the person that they are being followed by and thrown into the followers prop