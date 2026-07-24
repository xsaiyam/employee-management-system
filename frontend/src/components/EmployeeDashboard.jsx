import React, { useState, useEffect } from "react";
import axios from "axios";

import EmployeeModal from "./EmployeeModal";
import EmployeeTable from "./EmployeeTable";

import "../App.css";

import logo from "../assets/pramerica-logo.png";
const API_URL = "https://employee-management-system-iaat.onrender.com";

function EmployeeDashboard({logout}) {


const [showModal,setShowModal] = useState(false);

const [employees,setEmployees] = useState([]);

const [editData,setEditData] = useState(null);

const [deleteId,setDeleteId] = useState(null);

const [search,setSearch] = useState("");

const [currentTime,setCurrentTime] = useState(new Date());





// Admin Data

const admin = JSON.parse(

localStorage.getItem("admin")

);





// Time Update

useEffect(()=>{


const timer=setInterval(()=>{

setCurrentTime(new Date());

},1000);



return()=>clearInterval(timer);


},[]);






// Fetch Employees

useEffect(()=>{


fetchEmployees();


},[]);


const fetchEmployees = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/employees`);
    setEmployees(res.data.employees);
  } catch (error) {
    console.log(error);
  }
};










// Add / Update Employee


const addEmployee = async (employee) => {
  try {
    if (editData) {
      await axios.put(
        `${API_URL}/api/employees/${editData.id}`,
        employee
      );
    } else {
      await axios.post(
        `${API_URL}/api/employees`,
        employee
      );
    }

    fetchEmployees();
    setShowModal(false);
    setEditData(null);
  } catch (error) {
    console.log(error);
  }
};







// Edit

const editEmployee=(employee)=>{


setEditData(employee);

setShowModal(true);


};







// Delete Popup

const deleteEmployee=(id)=>{


setDeleteId(id);


};







// Confirm Delete


const confirmDelete = async () => {
  try {
    await axios.delete(
      `${API_URL}/api/employees/${deleteId}`
    );

    fetchEmployees();
    setDeleteId(null);
  } catch (error) {
    console.log(error);
  }
};






// Search


const filteredEmployees = employees.filter((emp)=>


emp.name.toLowerCase().includes(search.toLowerCase())

||

emp.lanId.toLowerCase().includes(search.toLowerCase())

||

emp.department.toLowerCase().includes(search.toLowerCase())


);





return(

<div>
{/* ================= HEADER ================= */}


<header className="header">


<div className="header-left">


<img

src={logo}

alt="Pramerica Logo"

className="company-logo"

/>



<div>


<h1>

Pramerica Life Insurance

</h1>


<p>

Employee Management System

</p>


</div>


</div>





<div className="header-right">



<div className="help-dropdown">


<button className="help-btn">


Help & Assistance


</button>



<div className="help-menu">


<p>
📧 hr.support@pramerica.com
</p>


<p>
☎ +91-1800-123-456
</p>


<p>
🕘 Monday - Friday
</p>


<p>
09:00 AM - 06:00 PM
</p>



</div>


</div>





<div className="notification">


🔔


</div>







<div className="profile">


👤 {admin?.username || "Admin"}



<button

className="logout-btn"

onClick={logout}

>


Logout


</button>



</div>




</div>



</header>






{/* ================= BANNER ================= */}



<div className="quote-banner">


🛡 Protecting Lives • Building Futures • Together


</div>







{/* ================= WELCOME CARD ================= */}



<div className="welcome-card">



<div>


<h2>


Welcome to Employee Management Portal 👋


</h2>



<p>


Manage employee registration, records and workforce efficiently.


</p>


</div>





<div className="date-time">


<h3>


{currentTime.toLocaleDateString()}


</h3>



<h4>


{currentTime.toLocaleTimeString()}


</h4>



</div>



</div>







{/* ================= DASHBOARD CARDS ================= */}



<div className="dashboard-cards">





<div className="card">


<h3>

👥 Total Employees

</h3>


<h1>

{employees.length}

</h1>


</div>






<div className="card">


<h3>

🏢 Departments

</h3>


<h1>


{

new Set(

employees.map(

(emp)=>emp.department

)

).size


}


</h1>


</div>






<div className="card">


<h3>

📍 Locations

</h3>


<h1>


{

new Set(

employees.map(

(emp)=>emp.location

)

).size


}


</h1>


</div>






<div className="card">


<h3>

⭐ Today's Registration

</h3>


<h1>

{employees.length}

</h1>


</div>



</div>








{/* ================= TOOLBAR ================= */}



<div className="toolbar">





<div className="search-box">


<input


type="text"


placeholder="🔍 Search by LAN ID, Name or Department..."


value={search}


onChange={(e)=>setSearch(e.target.value)}



/>


</div>






<button


className="register-btn"


onClick={()=>{


setEditData(null);


setShowModal(true);


}}


>


📝 Register Employee


</button>




</div>{/* ================= MODAL ================= */}


{
showModal &&

(

<EmployeeModal


closeModal={()=>{


setShowModal(false);

setEditData(null);


}}


addEmployee={addEmployee}


editData={editData}



/>

)

}







{/* ================= TABLE ================= */}



<EmployeeTable


employees={filteredEmployees}


editEmployee={editEmployee}


deleteEmployee={deleteEmployee}



/>







{/* ================= DELETE POPUP ================= */}



{

deleteId !== null &&

(


<div className="delete-overlay">


<div className="delete-box">


<h2>

Delete Employee

</h2>



<p>


Are you sure you want to delete this employee?


</p>





<button


className="yes-delete"


onClick={confirmDelete}


>


Yes Delete


</button>





<button


className="no-delete"


onClick={()=>setDeleteId(null)}


>


Cancel


</button>




</div>



</div>



)


}







{/* ================= FOOTER ================= */}



<footer className="footer">


<p>


© 2026 Pramerica Life Insurance |

Employee Management System


</p>



</footer>





</div>


);


}





export default EmployeeDashboard;