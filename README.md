Opening the Project
To open the project and start working on it, follow these steps:

Open a command prompt or terminal on your computer.

Navigate to the project folder using the cd command. For example, if your project folder is located in the "OneDrive" folder, you would run:

cd OneDrive
Then, navigate to the project folder on your desktop:

cd Desktop/project-folder
Once you are in the project folder in the command prompt or terminal, type the following command:

code .
This will open the project folder in Visual Studio Code (make sure you have Visual Studio Code installed on your machine).

Starting the App
To start the React app, follow these steps:

Make sure you are in the project folder in the command prompt or terminal.
In the command prompt or terminal, run the following command:(You can use the termina from Visual Studio)

npm start
This will open the app in your default browser.

Running the Server
Make sure thta you have this script on the pachage.json file. If you don t have just add it!

    "json-server": "json-server --watch db.json --port 7000 (or your desired port)"

In the command prompt or terminal, run the following command:

npm run json-server
This will start the server and allow your app to interact with it.


Installing React Packages

To install the react and react-dom packages, run the following command:
npm install react react-dom
This will install the necessary React packages for your project.


Installing React Router
If you have any issues with navigation in your React app, you need to install React Router.

To install React Router, run the following command:
npm install react-router
This will install React Router and allow you to use it for navigation in your app.

That's it! Now just Happy coding!