const Employee = require("../models/Employee");


// ==========================
// CREATE EMPLOYEE
// ==========================

exports.createEmployee = async (req,res)=>{

    try{


        const employee = await Employee.create(req.body);


        res.status(201).json({

            success:true,

            message:"Employee Added Successfully",

            employee

        });


    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};





// ==========================
// GET ALL EMPLOYEES
// ==========================


exports.getEmployees = async(req,res)=>{


    try{


        const employees = await Employee.findAll({

            order:[

                ["id","DESC"]

            ]

        });



        res.json({

            success:true,

            employees

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};






// ==========================
// UPDATE EMPLOYEE
// ==========================


exports.updateEmployee = async(req,res)=>{


    try{


        const {id}=req.params;



        const employee = await Employee.findByPk(id);



        if(!employee){


            return res.status(404).json({

                success:false,

                message:"Employee not found"

            });


        }



        await employee.update(req.body);



        res.json({

            success:true,

            message:"Employee Updated Successfully",

            employee

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};







// ==========================
// DELETE EMPLOYEE
// ==========================


exports.deleteEmployee = async(req,res)=>{


    try{


        const {id}=req.params;



        const employee = await Employee.findByPk(id);



        if(!employee){


            return res.status(404).json({

                success:false,

                message:"Employee not found"

            });


        }




        await employee.destroy();




        res.json({

            success:true,

            message:"Employee Deleted Successfully"

        });



    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};