// const mongoose = require("mongoose");

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5dzq9dn.mongodb.net/interneeWebsite`)
// .then(res => console.log("DB connected")).catch(err => console.log(err));

// module.exports = mongoose.connection;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/interneeWebsite", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

module.exports = mongoose.connection;
