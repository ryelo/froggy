const superDjs = require('super-djs');
require('dotenv').config();

module.exports = (client) => {
  console.log(superDjs.colourText('[DATABASE] Connecting to MongoDB...', 'yellow'));
  const { MONGO } = process.env;

  if (!MONGO) {
    console.warn("[WARN] A Mongo URI/URL isn't provided! (Not required)");
  } else {
    superDjs.connectMongoDB(MONGO, true, superDjs.colourText('[DATABASE] Connected to MongoDB!', 'green'));
  }
};
