
# CMS-Style Tech Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a CMS-Style tech blog built using the Model View Controller (MVC) programming paradigm with a MySQL database that is accessed using the Object Relational Mapping (ORM) Sequelize.

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [CMS-Style Tech Blog](#cms-style-tech-blog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)

## Installation

If the user wishes to run the application locally, they must first clone the repository to their local machine.

An example .env file is included in the root folder of the repository. The .EXAMPLE file extension should be removed and the ```DB_USER``` and ```DB_PASSWORD``` fields are populated with the user's MySQL information.

The user should also run ```npm i``` or ```npm install``` in the root folder to install npm dependencies and ```npm run seed``` to seed the database with test data.

Then the user can then run ```npm start``` to start the server and navigate to ```localhost:3001``` in their browser to view the application.


## Usage

In order to use this application, the user can either run ```npm start``` to start the server and navigate to ```localhost:3001``` in their browser to view the application locally, or they can navigate to the deployed application at [here](https://pacific-headland-29563.herokuapp.com/).

The user will find themselves on the homepage of the application. From here, they can view all posts by all users of the blog. They can click on a post to view both the post and any comments that have been made on it.

In order to interact with the application further, the user must first login or create an account by navigating to the `Login` page using the link in the navigation bar. The user can then either login with their existing credentials or create a new account by clicking the `Sign Up` tab and entering a username and password.
Once the user has created an account, they will be redirected to the `Dashboard` where they can view their own posts or create new ones. Just as on the homepage, the user can click on a post to view both the post and any comments that have been made on it.

When the user selects a post from the `Homepage` or `Dashboard`, they will be redirected to the `Post` page where they will see the post contents and any comments that have been made on it. If the user is logged in, they will also have the option to add a comment to the post. If the user is the author of the post, they will also have the option to edit or delete the post. Deleting a post will delete all comments associated with it.

The user can logout of their account at any point by clicking the `Logout` button in the navigation bar.

## License

    MIT License

    Copyright (c) 2023 Travis Miller

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Questions

If you have any questions, comments, or concerns, contact the developer using the email provided below

Email: [traviscmiller01@gmail.com](mailto:traviscmiller01@gmail.com);

Check out the developer's other projects on GitHub by cicking the link below

GitHub Username: [tcmiller30](https://github.com/tcmiller30)
