const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
        `mongodb://${process.env.MONGODB_URL}/${process.env.MONGODB_DBNAME}`
    );
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectToDatabase;