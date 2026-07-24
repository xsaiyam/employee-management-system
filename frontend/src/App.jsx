import React, {useState} from "react";

import Login from "./components/Login";

import EmployeeDashboard from "./components/EmployeeDashboard";



function App(){


const [isLogin,setIsLogin]=useState(

localStorage.getItem("token") ? true : false

);





const logout = ()=>{


localStorage.removeItem("token");

localStorage.removeItem("admin");


setIsLogin(false);


};






if(!isLogin){


return(

<Login

setLogin={setIsLogin}

/>

);


}





return(

<EmployeeDashboard

logout={logout}

/>

);



}



export default App;