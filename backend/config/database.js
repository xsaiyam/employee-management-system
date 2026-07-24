const { Sequelize } = require("sequelize");


const sequelize = new Sequelize({

    dialect: "sqlite",

    storage: "./database/employee.db"

});


const connectDB = async()=>{

    try{

        await sequelize.authenticate();

        console.log("SQLite Database Connected Successfully");

    }
    catch(error){

        console.log("Database Connection Error:", error);

    }

};


module.exports = {
    sequelize,
    connectDB
};