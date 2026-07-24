import React from "react";

import "./EmployeeTable.css";



function EmployeeTable({

    employees,

    editEmployee,

    deleteEmployee

}) {



return (

<div className="table-container">



<h2 className="table-title">

Employee Records

</h2>






{

employees.length === 0 ?



(

<div className="no-data">


<h3>

No Employee Found

</h3>



<p>

Register new employee to see records here.

</p>



</div>


)



:



(



<table>


<thead>


<tr>


<th>

S.No

</th>



<th>

LAN ID

</th>



<th>

Employee Name

</th>



<th>

Email

</th>



<th>

Phone

</th>



<th>

Department

</th>



<th>

Designation

</th>



<th>

Location

</th>



<th>

Manager

</th>



<th>

Action

</th>



</tr>


</thead>







<tbody>


{


employees.map((emp,index)=>(



<tr key={emp.id}>


<td>

{index + 1}

</td>




<td>

{emp.lanId}

</td>




<td>

{emp.name}

</td>




<td>

{emp.email}

</td>




<td>

{emp.phone}

</td>




<td>

{emp.department}

</td>




<td>

{emp.designation}

</td>




<td>

{emp.location}

</td>




<td>

{emp.manager}

</td>





<td>



<button

className="edit-btn"


onClick={()=>editEmployee(emp)}

>


✏️ Edit


</button>







<button


className="delete-btn"


onClick={()=>deleteEmployee(emp.id)}


>


🗑 Delete


</button>





</td>




</tr>


))


}



</tbody>



</table>



)



}



</div>


)


}



export default EmployeeTable;