*Project description:

Hadj and omra guide is a web and android application, that helps people doing hajj and omra rituals  correctly,The application provides  informations that helps the pilgrim to adapt and find the correct answers for his questions during the Hajj and omra


*How to run this project:

I/Web:

1/Make sure that you had NodeJs in your machine if not Download it from : https://nodejs.org/en/.
 And MySql Server if not Download it from : https://www.mysql.com/fr/downloads/
 (it's recommended to install MySql WorkBench, it's eazy to controll the data from it)

2/Then install the Dependencies :

 -Open your command line and go to the project repository: cd C:/UserName/.../Hadj-Omra-Project

 -then execute this commandes:

   * npm install

   * npm nodemon


 -In your database commande line or in WorkBench (MySql Server):


   *Create a new Schema


   *Create the tables: (this are instructions ready to execute)

      create table users(idUsers INT(11) PRIMARY KEY AUTO_INCREMENT,
	     UserName varchar(45) NOT NULL ,
	     UserMail varchar(45) NOT NULL UNIQUE,
	     UserPassword varchar(60) NOT NULL UNIQUE,
             tokenKey varchar(45) NOT NULL ,
	     status varchar(45) ,country varchar(45) ,
   	     genre varchar(20) ,date_naiss date ,img blob
      );


      create table message(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
        content VARCHAR(255)NOT NULL UNIQUE,
        createdat datetime,
        idUserqst int(11) NOT NULL ,
        userNameQst varchar(45) NOT NULL
      );


      *create table reply(idr INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
		   cont VARCHAR(255),
                   qid int(11) ,
                   userNameRes varchar(45) NOT NULL
       );
       //Other Tables Informations

          Table: marchet
            Columns:
              idM int(11) AI PK
              nameM varchar(44)
              dscM varchar(255)
              pathM varchar(255)

          Table: hotel
            Columns:
              idH int(11) AI PK
              nameH varchar(44)
              pathH varchar(255)
              prix varchar(255)
              avis varchar(255)

          Table: agence
            Columns:
              idA int(11) AI PK
              nameA varchar(44)
              pathA varchar(255)
              dscA varchar(255)
              prixA varchar(255)
              avis varchar(255)

          Table: place
            Columns:
              idP int(11) AI PK
              nameP varchar(44)
              dscP varchar(255)
              pathP varchar(255)

          Table: resturant
            Columns:
              idP int(11) AI PK
              name varchar(44)
              dsc varchar(255)
              path varchar(255)

    *Go to hadj_omra_repo/config/config.js ==> then change:
    Ligne 6: "var mysqlConnection = mysql.createConnection({
                 host:'127.0.0.1',
  				       user:'root',
 				         port:'3310',
  			       	 password:'ismail',
  				       database:'hadj_omra' //(This is the name of your schema)
     Ligne 12:	 });"
          #######Change this data to correspend to your Connection data##########     

3/run this command in your command line:
   nodemon server  

4/Go to your Browser and write this:
 localhost:8080

II/ Mobile App:


 -Modify the ip addr in the following classes: Login, Register, RetrofitClient, FormActivity.

 -Connect in a local network (Share the cnx with the phone that you want to run the application with).

 -Activate debug mode in your phone.

 -If there is an error of type "java.lang.OutOfMemoryError: Failed to allocate" => implies that you cannot use the app in this phone.

 -The Gps API most likely it won't work because isn't a free API.
