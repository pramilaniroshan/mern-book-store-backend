
  /* ------------------------------------------------------------------ */
  // db.js
  
  const mongoose = require('mongoose');
  const config = require('config');
  const db = config.get('mongoURI');

  //const db = "mongodb+srv://admin:<Ad#PF57L8W5wAgN>@book-store.0fa86.mongodb.net/book-store?retryWrites=true&w=majority"
  mongoose.set('useUnifiedTopology', true);
  
  const connectDB = async () => {
    try {
      await mongoose.connect(
        db,
        {
          useNewUrlParser: true
        }
      );
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;