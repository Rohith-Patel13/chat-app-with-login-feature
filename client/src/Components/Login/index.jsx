
import { useState } from "react"
import axios from "axios"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Fronted_URI} from "../../config"
import './index.css'


const Login=()=> {

  const [isSignIn,setIsSignIn] = useState(false)
  const [formData,setFormData] = useState({})


  const signinOrRegisterClicked = ()=>{
    setIsSignIn(!isSignIn)
    setFormData({})
  }

  const handleInputChange = (e)=>{
    // console.log(e.target)
    setFormData({
      ...formData,
      [e.target.name]:e.target.value // When you use formData[e.target.name], the part e.target.name is evaluated to a string, which is then used as the key to access the property in the formData object. This allows you to dynamically update the state based on the name attribute of the input element that triggered the change event.
    })
  }

  const registerButtonClicked = async()=>{
    // console.log(process.env.FRONTEND_URI)
    const data = await axios.post(`${Fronted_URI}/api/users/register`)
    console.log(data)
  }

  return (
    <div className="register-login-container">
      <p>{isSignIn?"Not a member":"Already a member"}?<span className="cursor-pointer" onClick={signinOrRegisterClicked}>{isSignIn?" Register":" Sign In"}</span></p>
      {
        isSignIn?
        (
        <form>
          <div className="flex flex-col">
            <label htmlFor="nameLogin" className="cursor-pointer mb-1">Your Name</label>
            <input onChange={handleInputChange}
            name="name"
            value={formData.name || ""}
            type="text"
            id="nameLogin"
            className="form-control"
            placeholder="Enter Your Name" 
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="passwordLogin" className="cursor-pointer mb-1">Your Password</label>
            <input
            onChange={handleInputChange}
            name="password"
            value={formData.password || ""}
             type="password" id="passwordLogin" className="form-control" placeholder="Enter Your Password" />
          </div>
          <button className="btn btn-primary mt-4">Login</button>
        </form>
        ):(
        <form>
          <div className="flex flex-col">
            <label htmlFor="name" className="cursor-pointer mb-1">Your Name</label>
            <input 
            onChange={handleInputChange}
            name="name"
            value={formData.name || ""}
            type="text" id="name" className="form-control" placeholder="Enter Your Name" />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="email" className="cursor-pointer mb-1">Your Email</label>
            <input
                onChange={handleInputChange}
                name="email"
                value={formData.email || ""}
             type="email" id="email" className="form-control" placeholder="Enter Your Email" />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="password" className="cursor-pointer mb-1">Your Password</label>
            <input
              onChange={handleInputChange}
              name="password"
              value={formData.password || ""}
             type="password" id="password" className="form-control" placeholder="Enter Your Password" />
          </div>
          <button
          onClick={registerButtonClicked}
          className="btn btn-primary mt-4"
          >Register</button>
        </form>
        )
      }
    </div>
  )
}
export default Login
