
import { useState } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css'


const Login=()=> {

  const [isSignIn,setIsSignIn] = useState(false)
  const [formData,setFormData] = useState({})


  const signinOrRegisterClicked = ()=>{
    setIsSignIn(!isSignIn)
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
            <input type="text" id="nameLogin" className="form-control" placeholder="Enter Your Name" />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="passwordLogin" className="cursor-pointer mb-1">Your Password</label>
            <input type="password" id="passwordLogin" className="form-control" placeholder="Enter Your Password" />
          </div>
          <button className="btn btn-primary mt-4">Login</button>
        </form>
        ):(
        <form>
          <div className="flex flex-col">
            <label htmlFor="name" className="cursor-pointer mb-1">Your Name</label>
            <input type="text" id="name" className="form-control" placeholder="Enter Your Name" />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="email" className="cursor-pointer mb-1">Your Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter Your Email" />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="password" className="cursor-pointer mb-1">Your Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter Your Password" />
          </div>
          <button className="btn btn-primary mt-4">Register</button>
        </form>
        )
      }
    </div>
  )
}
export default Login
