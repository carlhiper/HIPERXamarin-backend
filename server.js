var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('UserModel'); // Create a table for 'UserModel' with default settings
mobileApp.tables.add('GoalModel'); // Create a table for 'GoalModel' with default settings
mobileApp.tables.add('TeamModel'); // Create a table for 'TeamModel' with default settings


app.use(mobileApp);
app.listen(process.env.PORT || 3000);
