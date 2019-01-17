const uuid = require ('uuid');

//initializing a data structure, array for temporarily storing users

const usersDB = [
    {   
        "id": uuid.v4(),
        "firstname": "Placide",
        "lastname": "IRANDORA",
        "othername": "geek",
        "email": "placideirandora@gmail.com",
        "phoneNumber": "0786045655",
        "username": "placideirandora"
    },

    {   
        "id": uuid.v4(),
        "firstname": "Innocent",
        "lastname": "TUYISHIMIRE",
        "othername": "bienvenu",
        "email": "innocenttuyishimire@gmail.com",
        "phoneNumber": "07861885655",
        "username": "bienvenu" 
    },

    {   
        "id": uuid.v4(),
        "firstname": "Fred",
        "lastname": "MANZI",
        "othername": "nyakawhite",
        "email": "fredmanzi@gmail.com",
        "phoneNumber": "0784579584",
        "username": "fredmanzi" 
    },
    

];

//exporting the data structure so that it can be accessed globally

module.exports = usersDB;





