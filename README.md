EDUCASE School API
Backend API for adding schools and listing nearby schools by distance from a user's latitude and longitude.

Tech Stack
Node.js
Express.js
MySQL
mysql2
dotenv
Project Structure
project/
  server.js
  package.json
  src/
    app.js
    config/
      db.js
    controllers/
      schoolController.js
    routes/
      schoolRoutes.js
Setup
Clone the repository and install dependencies:

cd project
npm install
Create a .env file inside the project folder:

MYSQLHOST=localhost
MYSQLUSER=root
MYSQLPASSWORD=your_password
MYSQLDATABASE=school
MYSQLPORT=3306
PORT=5000
For Railway or other hosted MySQL providers, the app also supports:

MYSQL_URL=mysql://user:password@host:port/database
Run Locally
npm start
For development:

npm run dev
The server runs on:

http://localhost:5000
