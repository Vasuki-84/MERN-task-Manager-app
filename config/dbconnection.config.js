const mongoose = require("mongoose");
const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.dbport, {
      ssl: true,
      tlsAllowInvalidCertificates: false,
    });
    console.log("database connected succcesfully");
  } catch (err) {
    console.log("database connection failure");
  }
};
module.exports = dbconnection;
