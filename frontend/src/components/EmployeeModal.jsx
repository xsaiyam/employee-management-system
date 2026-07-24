import React, { useState, useEffect } from "react";
import "./EmployeeModal.css";


function EmployeeModal({

  closeModal,

  addEmployee,

  editData

}) {


  const initialData = {

    lanId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    location: "",
    manager: ""

  };


  const [employee, setEmployee] = useState(initialData);


  const [error, setError] = useState("");



  // Edit Data Load

  useEffect(() => {


    if(editData){

      setEmployee(editData);

    }

    else{

      setEmployee(initialData);

    }


  },[editData]);





  // Input Change

  const handleChange = (e)=>{


    setEmployee({

      ...employee,

      [e.target.name]: e.target.value

    });


  };






  // Submit Form

  const handleSubmit = (e)=>{


    e.preventDefault();



    setError("");



    if(

      !employee.lanId ||

      !employee.name ||

      !employee.email ||

      !employee.phone ||

      !employee.department ||

      !employee.designation ||

      !employee.location ||

      !employee.manager

    ){


      setError("All fields are required");

      return;

    }






    // LAN ID Validation

    if(!/^EMP[0-9]{3,}$/i.test(employee.lanId)){


      setError("LAN ID format should be EMP001");

      return;

    }





    // Name Validation

    if(!/^[A-Za-z ]+$/.test(employee.name)){


      setError("Name should contain only letters");

      return;

    }





    // Email Validation

    if(

      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)

    ){


      setError("Enter valid email address");

      return;

    }






    // Phone Validation


    if(!/^[0-9]{10}$/.test(employee.phone)){


      setError("Phone number should be 10 digits");

      return;

    }






    addEmployee(employee);


  };







  return (


    <div className="modal-overlay">


      <div className="employee-modal">



        <div className="modal-header">


          <h2>

            {editData ?

            "Update Employee"

            :

            "Employee Registration"

            }

          </h2>



          <button

          onClick={closeModal}

          >

            ✖

          </button>


        </div>







        <form onSubmit={handleSubmit}>


          <div className="form-grid">





            <div>

              <label>
                LAN ID *
              </label>


              <input

              name="lanId"

              value={employee.lanId}

              onChange={handleChange}

              placeholder="EMP001"

              />

            </div>






            <div>

              <label>
                Employee Name *
              </label>


              <input

              name="name"

              value={employee.name}

              onChange={handleChange}

              placeholder="Employee Name"

              />


            </div>






            <div>

              <label>
                Email *
              </label>


              <input

              type="email"

              name="email"

              value={employee.email}

              onChange={handleChange}

              placeholder="example@gmail.com"

              />


            </div>






            <div>

              <label>
                Phone *
              </label>


              <input

              name="phone"

              maxLength="10"

              value={employee.phone}

              onChange={handleChange}

              placeholder="9876543210"

              />


            </div>







            <div>

              <label>
                Department *
              </label>


              <select

              name="department"

              value={employee.department}

              onChange={handleChange}

              >


                <option value="">
                  Select Department
                </option>


                <option>
                  IT
                </option>


                <option>
                  HR
                </option>


                <option>
                  Finance
                </option>


                <option>
                  Sales
                </option>


                <option>
                  Operations
                </option>


              </select>


            </div>








            <div>

              <label>
                Designation *
              </label>


              <select

              name="designation"

              value={employee.designation}

              onChange={handleChange}

              >


                <option value="">
                  Select Designation
                </option>


                <option>
                  Developer
                </option>


                <option>
                  Manager
                </option>


                <option>
                  Team Lead
                </option>


                <option>
                  Analyst
                </option>


              </select>


            </div>








            <div>

              <label>
                Location *
              </label>


              <input

              name="location"

              value={employee.location}

              onChange={handleChange}

              placeholder="Delhi"

              />


            </div>








            <div>

              <label>
                Manager *
              </label>


              <input

              name="manager"

              value={employee.manager}

              onChange={handleChange}

              placeholder="Manager Name"

              />


            </div>





          </div>







          {

          error &&

          <p className="error">

            {error}

          </p>

          }





          <div className="modal-buttons">



            <button

            type="submit"

            className="save-btn"

            >

              {editData ?

              "Update Employee"

              :

              "Save Employee"

              }

            </button>






            <button

            type="button"

            className="cancel-btn"

            onClick={closeModal}

            >

              Cancel

            </button>



          </div>





        </form>



      </div>


    </div>


  );


}


export default EmployeeModal;