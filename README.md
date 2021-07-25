The monthly premium system has been built using C# for the backend and Angular for the frontend.
PREREQUISITES:
•	Visual Studio 2019 or later
•	.NET Core 5.1
•	Application runs on Port no 44356 for https

QUICK START:
•	Verify prerequisites above
•	Clone the project from GitLab
•	Open a command prompt
•	If npm is not installed, type "npm install".  Otherwise type "npm run build"
•	To run, browse to the selected folder in the command prompt and type 'npm run start" OR "ng serve"
•	In appsettings.json, please enter a valid database connection string
•	Open Visual Studio and Press F5 to start the application

KEYPOINTS:
•	The code is set up to store user information in database
•	There is web service call to populate the Occupation dropdownlist
•	Premium calculation is all done in Angular
•	The calculation of DOB can be done better. It works the way it is, but not the best way.
•	The DOB date selection works for calculation, but the date selection disappears after selection.
