# Automate Weather Api.

This project was create using Node.js and MongoDB envirment.
this api can store user email and location in Mongodb database.
after user sign in to the database, its automatically fetch weather details from third party API and store that data in db.
then this application send the hourly weather deatail to users email every 3 hour.

if you want to run this app on your local envirement, follow the following instruction.

## Instruction for the run the application in local envirement.

1.clone the repository into your local computer.

2.create .env file on base folder and add the following variable in to it. 

    PORT=5000 // Port that use to handle the reqest
    DATABASE_URL="Replace this with mongodb url"
    API_KEY="Replace this with your own open-weather-map API key"
    SMTP_EMAIL="Replace this with your gmail that can be used to send email"
    SMTP_PASSWORD="Replace this with your gmail App password"

you can get API key after sign in to [open weather map](https://home.openweathermap.org/users/sign_in) website.

3.run the command `npm install`. this will install all the dependency.

4.run the command `npm start`.

To run this app corectly you need to have make sure mongoDB database install in your computer.

## Routes that can be use with  this api

1.localhost:5000/api/users/signUp

2.localhost:5000/api/users/update?id=

3.localhost:5000/api/weathers/4?date=9/1/2023

!important: user id must be combin to url. in this case it is 4.
!important: date must be pass as query on this format.



