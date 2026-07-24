import React, {useState} from "react";
import axios from "axios";
import "./Login.css";


function Login({setLogin}){


const [username,setUsername]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");





const handleLogin = async(e)=>{

e.preventDefault();


try{


const response = await axios.post(

"https://employee-management-system-iaat.onrender.com/api/auth/login",

{
username,
password
}

);



localStorage.setItem(

"token",

response.data.token

);



localStorage.setItem(

"admin",

JSON.stringify(response.data.admin)

);



setLogin(true);



}

catch(error){


setError(

"Invalid Username or Password"

);


}



};







return(


<div className="login-page">


<div className="login-box">


<h2>

🔐 Admin Login

</h2>



<p>

Employee Management System

</p>




<form onSubmit={handleLogin}>


<label>
Username
</label>


<input

type="text"

value={username}

onChange={(e)=>setUsername(e.target.value)}

placeholder="Enter Username"

/>





<label>
Password
</label>


<input

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

placeholder="Enter Password"

/>





{

error &&

<p className="login-error">

{error}

</p>

}





<button>

Login

</button>




</form>



</div>


</div>


)


}


export default Login;