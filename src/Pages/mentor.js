import React, {useState} from 'react';
import "./mentor.css";

function MentorData(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')

    const mentorUser = async (event) => {
        event.preventDefault()
    

        const response = await fetch('https://iyasbac.herokuapp.com/mentordata/mentor', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				phone,
                gender
			}),
		})

		const data = await response.json()

        if (data.status === 'OK') {
             console.log("ok");
        }
    }

    const student = () => {
		window.location.href = '/welcome'
	}
    return(
     <>
        <div>
        <button className='ooe' onClick={student}>Back</button>
            <h1 style={{textAlign: "center"}}>Mentor Post Your Data</h1>
         <form onSubmit={mentorUser}>
                <input 
                className='ood'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <input 
                 className='ood'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                 <input 
                  className='ood'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    placeholder="phone"
                />
                 <input 
                  className='ood'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    type="text"
                    placeholder="gender"
                />
                
                <input  className='ooe' type="submit" value="submit" />
            </form>    
        </div>
     </>
    )
}

export default MentorData;