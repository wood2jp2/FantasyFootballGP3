# FantasyFootballGP3
The goal for this app was to provide a platform on which fantasy football lovers could thrive. We wanted a singular platform that users
could log into to access ALL of their multiple teams, spread across different sources (NFL.com, Yahoo.com, ESPN), as well as their favorite
news characters and platforms. We ended up, due to time constraints, going down a path on which users could add their players one by one, 
using our tables. Unfortunately, we also had issues dealing
with some of the APIs for these big fantasy football sites, however, we are accessing a large quantity of data that allows users to add 
players and compare their states, such as projected rankings and points based off position. 

MY ROLE: My particular role here was all over the place, but I enjoy that the most. I completed all of the user authentication, and shaped 
it around the React template, which was surprisingly difficult. I also wrote the scripts to scrape not only our favorite Fantasy anchor 
Twitter accounts, but to also scrape the Injury section of CBS Sports. That way, our user could have the latest news and injury. I also
wrote the NodeMailer script, which sends an email from our project GMail account to a newly signed up user. Lastly, I wrote the sign in, 
signout, and signup components that threw Axios requests to the back end to ensure new users were added, or existing users were verified.

WHAT WE WOULD DO DIFFERENTLY: Use React and MongoDB for authentication. Sequelize and MySQL were pretty difficult to integrate into the 
React boilerplace, so I'm sure that there are easier ways to do what we did. Also, we would use something better than vanilla Materialize CSS 
for our React components. I would also pursue actually being able to implement a user's existing team data into our app. If a user has an 
ESPN fantasy team, then our app would take that info and integrate and reform the team with our template. 

Thank you for reading!
