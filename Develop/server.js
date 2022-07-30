const express = require('express');
const routes = require('./routes');
// import sequelize connection
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('')
//to test the connection 
try {
  await sequelize.authenticate();
  console.log('Connection successful!');
} catch (error) {
  console.error('Unable to reach database');
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
