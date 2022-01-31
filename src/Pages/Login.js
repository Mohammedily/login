// import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// // import axios from 'axios'
//  import "./Pages.css"

// const Login = () => {

//     const history = useHistory();

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const loginUser = async (event) => {
//         event.preventDefault()


//         const response = await fetch('https://iyasbac.herokuapp.com/auth/login', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				email,
// 				password,
// 			}),
// 		})

// 		const data = await response.json()

//         if (data.user) {
//             localStorage.setItem('token', data.user)
//             alert('Login successful')
//             window.location.href = '/welcome'
//         } else {
//             alert('Wrong User credentials')
//         }
//     }

//     return (
//         <div className="App">
//             <h1>AttendancePortal Login</h1>
//             <form onSubmit={loginUser}>
//                 <input 
//                  className='ood'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     type="email"
//                     placeholder="Student Email"
//                 />
//                 <br />
//                 <input 
//                  className='ood'
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="password"
//                     placeholder="Student Password"
//                 />
//                 <br />
//                 <input  className='ooe' type="submit" value="Login" />
//                 <input className='ooe' type="submit" onClick={() => history.push('/Register')} value="Register" />
//             </form>
//         </div>
//     )
// }

// export default Login;