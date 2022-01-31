import React, { useState } from 'react'
// import jwt from 'jsonwebtoken'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import "./Welcome.css";





const Welcome = () => {
	// const history = useHistory()

	// const [user, setUser] = useState('User')

	// useEffect(() => {
	// 	const token = localStorage.getItem('token')
	// 	if (token) {
	// 		const authUser = jwt.decode(token)
	// 		if (!authUser) {
	// 			localStorage.removeItem('token')
	// 			history.replace('/login')
	// 		} else {
	// 			setUser(authUser)
	// 		}
	// 	} else {
	// 		alert('Please Login')
	// 		history.replace('/login')
	// 	}
	// }, [])

	// const logoutUser = () => {
	// 	alert('Logged Out')
	// 	localStorage.removeItem('token')
	// 	history.replace('/login')
	// }
     
	 const student = () => {
		window.location.href = '/student'
	}
     const mentor = () => {
		window.location.href = '/mentor'
	 }
	 const MentorData = () =>{
		window.location.href = '/mentordata'
	 }
	 const StudentData = () => {
		window.location.href = '/studentdata'
	 }


	return (
		<>
		<div>
	<input className="odee" type="submit" value="student Data update" onClick={student} />
	<input className="odee" type="submit" value="mentor Data update" onClick={mentor} />
	<input className="odee" type="submit" value="Mentor Data" onClick={MentorData} />
	<input className="odee" type="submit" value="Student Data" onClick={StudentData} />
	{/* <input className="odee" type="submit" value="Logout" onClick={logoutUser} /> */}
		</div>
		<div>
			<Real/>
		</div>
		</>
	)
}




function Real() {
	return(
		<>
		<h1 className='reas'>Welcome To Attendance portal</h1> 
		</>
	)
}









export default Welcome;