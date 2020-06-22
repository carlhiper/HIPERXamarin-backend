var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

//Add tables
mobileApp.tables.add('UserModel'); // Create a table for 'UserModel' with default settings
mobileApp.tables.add('GoalModel'); // Create a table for 'GoalModel' with default settings
mobileApp.tables.add('TeamModel'); // Create a table for 'TeamModel' with default settings
mobileApp.tables.add('PostModel'); // Create a table for 'PostModel' with default settings
mobileApp.tables.add('ChallengeModel'); // Create a table for 'ChallengeModel' with default settings
mobileApp.tables.add('PointModel'); // Create a table for 'PointModel' with default settings
mobileApp.tables.add('TeamsModel'); // Create a table for 'TeamsModel' with default settings


app.use(mobileApp);
app.listen(process.env.PORT || 3000);
