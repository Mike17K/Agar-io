# Agar-io

An implementation of the agar.io online game, with a local server with node.js and mysql database

## To Run

U need to have a local mySql service running
and a connection with
user: root
password: root

```
git clone https://github.com/Mike17K/Agar-io.git
cd Agar-io
npm install
```

now in the file database_config.sql there is the code for initializing the database execute it in mysql workbench
and finally

```
node .\server.js
```

Now the server it should be running
For the frontent for now its not implemented but u can run it with live server from the file /frontend/index.html
