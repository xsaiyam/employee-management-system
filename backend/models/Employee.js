const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/database");


const Employee = sequelize.define("Employee",{


    lanId:{

        type:DataTypes.STRING,

        allowNull:false,

        unique:true

    },


    name:{

        type:DataTypes.STRING,

        allowNull:false

    },


    email:{

        type:DataTypes.STRING,

        allowNull:false

    },


    phone:{

        type:DataTypes.STRING,

        allowNull:false

    },


    department:{

        type:DataTypes.STRING,

        allowNull:false

    },


    designation:{

        type:DataTypes.STRING,

        allowNull:false

    },


    location:{

        type:DataTypes.STRING,

        allowNull:false

    },


    manager:{

        type:DataTypes.STRING,

        allowNull:false

    }



});


module.exports = Employee;