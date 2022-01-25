import React from "react";
import './home.css';

function Home({setLoginUser}){
    return(
    <div className="homepage">
      <h1>hello homepage</h1>
      <div className="button" onClick={() => setLoginUser({})} >Logout</div>
    </div>
    )
}
export default Home;