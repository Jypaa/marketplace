Jyri Pappinen

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/qBr6G7dS)
# final-project
Web Programming 2023 - Final Project


auto deploy to render works https://store-5dzt.onrender.com/ but because free use it will put it down automaticly after inactive. 

Installation locally needs 3 termianal
1. First you need to make .env file to backend folder which have:

MYSQL_HOST='localhost'

MYSQL_USERNAME='root'

MYSQL_PASSWORD='store_password'

MYSQL_DATABASE='store_db'

JWT_KEY = '1234'

THESE ARE ONLY FOR RUNNING LOCALLY AND TESTING DO NOT USE THESE IN PRODUCT VERSIONS

2. In root folder run "npm install" after that run "docker compose up -d" that makes container for database 
3. From root folder go backend folder and run "npm install" after that run "npm start". now your backend is running 
4. From root folder go frontend folder and run "npm install" after that run "npm run dev" and now you can go localhost:5173 and check everythings are working

image from render
![image](https://user-images.githubusercontent.com/91068474/233803274-a96a2910-d803-4192-86fa-db810f67daa0.png)


Summary from project

Project was quite challenging, even with full example. In my opinion frontend was the easiest part and communicate between backend and database was hardest. There was also problem with api address after deploy, because I couldn't use variable for local and product so I needed to hard code for both solutions and it was only problem on deploying. After all project was very teachfull and shows bit all areas of which you need to think about when making fullstack application.

Criteria

1.Authenttication

User registration and login functionality works as expected (8 points)

Users can reset their password if they forget it (0 points)

User session management is implemented properly (2 points)

User authentication is secure, e.g validations, tokens, using password hashes (4 points)

2.Listing creation

Users can create new listings with all required information (6 points)

Proper error handling for missing or incorrect listing information (1 points)

Users can edit or delete their own listings (2 points)

Listing creation is secure, e.g validations (1 points)

  
3.Listing Viewing and Searching

Users can view all listings (8 points)

User can view only own listings (0 points)

Users can search for listings by keyword, category, and other filters (0 points)

Listing lists and details are displayed in a clear and organized manner (0 points)

Proper error handling for missing or invalid listings (1 points)

Listing viewing and searching is secure e.g validation, authorization (0 points)
  
4.Quality and CI/CD

Tests for all essential functionality (6 points)

CI/CD workflows are in place (5 points)

5.Documentation

Installation instructions (5 points)

Project summary (5 points)
  
BONUS
  Site is responsive, works on different screen sizes (2 points)
  
  
 Score: 
  57/100
  
  
  
  
  
  
  
