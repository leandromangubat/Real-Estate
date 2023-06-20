# HOUSE HUNTER</br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)
[![Handlebars.js Badge](https://img.shields.io/badge/Handlebars.js-000?logo=handlebarsdotjs&logoColor=fff&style=flat)](https://www.npmjs.com/package/express-handlebars)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)
[![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)](https://nodemon.io/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)


## Description

House Hunter is a web application where you can search for properties, upload your property for sale or rent and it is built with Node.js and Express.js that serves as a RESTful API for searching and listing real estate properties. It utilizes Handlebars.js as the template engine for rendering dynamic views, MySQL as the database management system, and the Sequelize ORM for interacting with the database. The project follows the MVC (Model-View-Controller) paradigm to maintain a well-organized folder structure. </br>

- [Application](#Application)
- [Technologies Used](#TechnologiesUsed)
- [Installation](#Installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [Credits](#credits)
- [License](#license)

## Application

Run the [House Hunter](https://immense-woodland-75023-12b9f87d1bf1.herokuapp.com/) application on Heroku
The following photos show how the application looks:
![Alt text]()
![Alt text]()

## Technologies Used

- Front-end: HTML, CSS, JavaScript, Handlebars.js, Bootstrap
- Back-end: Node.js, Express.js
- Database: MySQL
- User Authentication: bcrypt.js, express-session
- Package to upload photos: Multer

## Installation

Run the [House Hunter](https://immense-woodland-75023-12b9f87d1bf1.herokuapp.com/) application on Heroku

To run the House Hunter application locally, follow these steps:

- Clone the repository: git clone `https://github.com/leandromangubat/Real-Estate`.
- Navigate to the project directory: `cd house-hunter`.
- Install the dependencies using: `npm install`.
- Create a .env file
- Create a MySQL database using the provided SQL schema file (schema.sql).

```
mysql -u root -p
```

```
source ./db/schema.sql
```

- update the database connection details in the seed.js file in the seeds.

```
node ./seeds/seed.js
```

- Start the application: `npm start`.
- Open your web browser and visit `http://localhost:3001` to access the House Hunter application.

## Usage

To use the House Hunter application, follow the steps below:

- Visit the deployed House Hunter application or run it locally by following the installation steps mentioned above.

- Upon accessing the application, you will be presented with the home page, where you can navigate through different sections using the navigation menu.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

- Fork the repository.
- Create a new branch: `git checkout -b feature/your-feature-name`
- Make your changes and commit them: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin feature/your-feature-name`
- Open a pull request.

## Credits

- [Khyati Gandhi](https://github.com/thekhyatigandhi)
- [Leandro Mangubat](https://github.com/leandromangubat)
- [Gurveer Madurai](https://github.com/gurverm)
- [Nadeem Talaat](https://github.com/NadeemTalaat)
- [Mahdi El-Harake](https://github.com/mahdi83777)

## License

MIT License.
For more information on the license, please refer to the LICENSE file in the repo
