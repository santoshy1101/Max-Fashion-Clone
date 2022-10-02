import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
// import { useHistory } from "react-router-dom"

const Register = () => {
  // const history = useHistory()
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && password === reEnterPassword) {
      axios.post('https://maxfashion-by-gaurav.herokuapp.com/register', user).then((res) => {

       if(res.data.message==="Successfully Registerd"){
                    alert(res.data.message)
                    navigate("/login")
                }else{
                    alert("Innvalid  registration Credentials")
                }
                console.log(res)
      })
    } else {
      alert('invalid input')
    }
  }

  return (
    <div className="register">
      <h1 className="font-medium text-4xl mb-6 ">Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      
        <div
          className="pl-8 pr-8 bg-blue-500 h-10 rounded-sm text-white pt-2 text-xl"
          onClick={register}
        >
          Register
        </div>
   
      <div>or</div>
      <Link to="/login">
        <div className="pl-8 pr-8 bg-blue-500 h-10 rounded-sm text-white pt-2 text-xl">
          Login
        </div>
      </Link>
    </div>
  )
}

export default Register

// onClick={() => history.push("/login")}
