import axios from "axios";
import React, {useState, useEffect } from "react";
import "./studentdata.css"


function Student(){
     
    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get("https://iyasbac.herokuapp.com/student/get")
        .then(res => setUserList(res.data))
    },[])

    return(
        <div className="App" id="App">

            {
                userList.map(user => (
                    <div className="Card" id="card">
                    <h1 id="h1">StudentName:{user.name}</h1>
                        <h2 id="h2">StudentEmail:{user.email}</h2>
                        <h3 id="h3">Student phone No:{user.phone}</h3>
                        <h3 id="h3">Student Gender:{user.gender}</h3>
                </div>
           ))
            }
       
     </div>
    )
}

export default Student;