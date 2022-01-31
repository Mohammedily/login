import axios from "axios";
import React, {useState, useEffect } from "react";
import "./studentdata.css"


function Mentor(){
     
    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get("https://iyasbac.herokuapp.com/mentordata/get")
        .then(res => setUserList(res.data))
    },[])

    return(
        <div className="App" id="App">

            {
                userList.map(user => (
                    <div className="Card" id="card">
                    <h1 id="h1">MentorName:{user.name}</h1>
                        <h2 id="h2">MentorEmail:{user.email}</h2>
                        <h3 id="h3">Mentor phone No:{user.phone}</h3>
                        <h3 id="h3">Mentor Gender:{user.gender}</h3>
                </div>
           ))
            }
       
     </div>
    )
}

export default Mentor;