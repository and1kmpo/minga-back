# Minga backend app
_____________________BLUE TEAM__________________

This project is an API for reading and managing of comics and manga.

For the configuration of the server from the backend are used tools such as:   
Node js: execution environment
Express : framework to build the server
Mongoose: to query the MongoDB database

## How the server works?

this project works with **MongoDB** with the help of **Mongoose** library, **React** to develop our application interfaces as SPA and **Vite** which pre-configures everything you need to create our React app.

## What are its endpoints?
________________________________________________________________
|               | REQUEST |                                     | 
| ENDPOINT      | METHOD  |         DESCRIPTION                 |
|_______________|_________|_____________________________________|
| auth/         | GET     | for users list                      |
| auth/register | POST    | for create new user                 |
| auth/signIn   | POST    | for autenthicate an user            |
| auth/signout  | POST    | for logout an user                  |
| auth/token    | POST    | for generate a token of the user    |
| auth/:id      | PUT     | for update an user                  |
| auth/delete   | DELETE  | for delete an user                  |
|_______________|_________|_____________________________________|
| authors/      | GET     | for authors list                    |
| authors/me    | GET     | for reading data of an logged author|
| authors/      | POST    | for create a new author             |
| authors/:id   | GET     | for find an author for id           |
|_______________|_________|_____________________________________|
| categories/   | GET     | for categories list                 |
| chapters/     | GET     | for chapters list                   |
| chapters/     | POST    | for create a new chapter            |
| chapters/:id  | GET     | for find a chapter for id           |
|_______________|_________|_____________________________________|
| companies/    | GET     | for reading companies               |
| companies/    | POST    | for create a new company            |
| companies/:id | PUT     | for update a  create a new company  |
| companies/:id | DELETE  | for  delete an company              |
|_______________|_________|_____________________________________|
| mangas/       | GET     | for mangas list                     |
| mangas/news   | GET     | for faind new mangas                |
| mangas/       | POST    | for create a new manga              |
| mangas/:id    | GET     | for find a manga for id             |
| mangas/:id    | PUT     | for update mangas                   |
| mangas/:id    | DELETE  | for delete mangas                   |
|_______________|_________|_____________________________________|

### How to run the project locally??

```npm run dev```

Remember:

```npm run {script-taken-from-package.json/scripts}```

## Main dependencies

See *package.json / dependencies*

    - Express [^4.18.2]
    : This Node.js web application framework allows us to create a solid infrastructure for servers.

    - Nodemon [^2.0.22]
    : use for recharge server.

    - Dotenv [^16.0.3]
    : use for environment variables.

___________________________________IMPORTANT___________________________________

------TO START
1. first you should clone this project
   ```git clone <repository link>```

2. Enter inside the folder
      ``` cd cloned repository name ```

3. Open a new window
         ```Code . ```


Note that, to get the project working in your local environment you must:

4. Open the terminal and run the command
          ``` npm install ```

-------make sure it is located inside the project folder.

5. Then, run the command:
         ``` npm run start ```

6 . Finally don´t forget:

manually create a file that you should name .ENV within which the following environment variables are set:

               MONGO_URI = 'mongodb+srv://minga:minga2023@minga-campo.klolo7m.mongodb.net/protalento'
               SECRET= 'keyS3cr3t4'

With these simple steps, you are ready to start!
