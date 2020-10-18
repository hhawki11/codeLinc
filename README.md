CodeLinc 7.0 Submission by Bryan Hill, Ethan Little, and Hunter Hawkins

How to run:

1) Starting with the front-end:
    * Install Node.js if not done so already.
    * cd into React folder, open terminal and run following commands:
     * npm install
     * npm start
    * This will run the react application on http://localhost:3000/
      
2) Next, the Spring Boot API:
  * cd into the SpringBootAPI folder,
  * Open terminal and type:
    * java -jar CodeLincAPI.jar
  * This will open all endpoints on http://localhost:8080/
  * All endpoint documentation can be found in the Endpoints Reference.pdf
  
3) Finally, to start the mySQL server
  * Install mySQL if not done so already
  * Install mySQL workbench
  * In mySQL worckbench, create a new connection at 127.0.0.1:3306
    with username: "root" and password: "password". Next, in the connection,
    create a database with the name "codelinc".
    * Next, locate the Administration tab and select Data Import / Restore.
    * In here, select import from Dump Project Folder and select the folder
    * named "db dump files". When selected make sure that all tables are also selected
    * and import.
    
If any problems or questions arise, email Bryan Hill at hillbj1@appstate.edu

