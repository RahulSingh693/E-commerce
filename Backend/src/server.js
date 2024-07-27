const app = require('./index');
require('dotenv').config();

const PORT =  process.env.PORT || 3001;

const start = async () => {
  try {
    await app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    
  } catch (error) {
    console.error(error);
  }
};

start(); // Start the server