# nodeJS express
http://localhost:3000/

# On launch

Database options:

- Program scripts needs database info in config.json file. 

- You able to run scripts for database creations/dpors. But first you need to install pgtools module with this command:
``npm install --save -g pgtools``
P.s. ``-g`` flag is important.

- Migration commands:
``npm run createDb - create database for project``(pgtools require)
``npm run dropDb - drop projects database``(pgtools require)
``npm run migrate - setting up database``
``npm run drop - drop all changes made by migrations``
