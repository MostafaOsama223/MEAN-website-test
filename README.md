# MEAN-website-test
This is a MEAN website made as a assignment for the Wireless Research Lab at the faculty of Engineering of Helwan University.

# TODOs
## Teacher
- Front End
  - Login form
    - Create the input fields & buttons.
    - Validate data (check for empty fields, password is confirmed right, maybe use regular expressions to validate email form).
    - Send data to the server and wait for the response.
    - Display the response.

  - Registration form
    - Create the input fields & buttons.
    - Check for empty fields.
    - Send data to the server and wait for the response.
    - Display the response (redirect to the home page in case of success, and display an error otherwise).
  
- Back End
  - Create the API endpoints
    - Main
      Name                       |  METHOD    |  BODY                                                                   |  URL
      ------                     |------------|-----------------------------                                            |-------
      ~~login~~                  |~~POST~~    |~~`{"user":str,"pass":str}`~~                                            |~~`..t/log`~~
      register                   |POST        |`{"user":str,"pass":str,"name":str,"email":str,"phone":int}`             |`..t/reg`
      
    - Tests
      Name                       |  METHOD    |  BODY                                                                   |  URL
      ------                     |------------|-----------------------------                                            |-------
      ~~get tests~~              |~~GET~~     |~~`...`~~                                                                |~~`..t/getTests`~~
      create test                |POST        |`{"num":int, "ques":[ ["Bla Bla?", ["a1","a2",..], .. ] ], "maxGr":int, "at":str}`              |`..t/test`
      
    - Groups
      Name                       |  METHOD    |  BODY                                                                       |  URL
      ------                     |------------|-----------------------------                                                |-------
      ~~get groups~~             |~~GET~~     |~~`...`~~                                                                    |~~`..t/getGrps`~~
      ~~remove group~~           |~~POST~~    |~~`{"grp":str}`~~                                                            |~~`..t/rmv/grp`~~
      ~~create group~~           |~~POST~~    |~~`{"stds":["std1", "std2", ..], "grpName":str, "stuNum":int, "at":str}`~~   |~~`..t/grp`~~
      ~~show group~~             |~~GET~~     |~~`...`~~                                                                    |~~`..t/grp/:grpName`~~
      
    - Students
      Name                       |  METHOD    |  BODY                                                                   |  URL
      ------                     |------------|-----------------------------                                            |-------
      receive students' requests |POST        |`{"std":int, "grpNo":int}`                                               |`..t/req`
      ~~get students~~           |~~GET~~     |~~`...`~~                                                                |~~`..t/getStds`~~
      move student               |POST        |`{"std":int,"from":str, "to":str}`                                       |`..t/mov`
      remove student             |POST        |`{"std":int, "from":str}`                                                |`..t/rmv/std`
      return students' data      |POST        |`{"from":str, "to":str}`                                                 |`..t/getData`



