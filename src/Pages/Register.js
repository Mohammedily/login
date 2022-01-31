// import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import "./Pages.css"

// // import axios from 'axios'





// const Register = () => {

//     const history = useHistory()

//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [phone, setPhone] = useState('')
//     const [gender, setGender] = useState('')
//     const [password, setPassword] = useState('')

//     const registerUser = async (event) => {
//         event.preventDefault()
//         const response = await fetch('https://iyasbac.herokuapp.com/auth/register', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				name,
// 				email,
//                 phone,
//                 gender,
// 				password,
// 			}),
// 		})

// 		const data = await response.json()

//         if (data.status === 'OK') {
//             history.push('/login')
//         }
//     }

//     return (
//         <div className='App'>
//             <h1>AttendancePortal Register</h1>
//             <form onSubmit={registerUser}>
//                 <input 
//                     className='ood'
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     type="text"
//                     placeholder="Student Name"
//                 />
//                 <input 
//                  className='ood'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     type="email"
//                     placeholder="Student Email"
//                 />
//                 <input 
//                  className='ood'
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     type="number"
//                     placeholder="Student Phone No"
//                 />
//                 <input 
//                    className='ood'
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                     type="text"
//                     placeholder="Student Gender"
//                 />
//                 <input 
//                  className='ood'
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="password"
//                     placeholder="Student Password"
//                 />
//                 <input  className='ooe' type="submit" value="Register" />
//                 <input  className='ooe' type="submit" onClick={() => history.push('/Login')} value="Login" />
//             </form>
//         </div>
//     )
// }

// export default Register;
