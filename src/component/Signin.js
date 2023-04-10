//import './App.css';
import './Signin.css'
import React, { useState } from 'react';
import Home from './Home';
import hotel_logo from './hotel.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
//import Home1 from './component/Home1';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import app from './firebase';
import Header from './Header';
//import {Routes,Route, useNavigate} from "react-router-dom";
//import AddEdit from './component/AddEdit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RealtimeData } from './demo';
//import App1 from './component/Home1'


function App1() {  

  const auth=getAuth(app);
  const[admin,setisadmin]=useState(false);
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");

const login =()=>{
  
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user=userCredential.user;
    alert(`Successfully logged in`)
  })
  .catch((error)=>{
    const errorCode=error.code;
    const errorMessage=error.message;
  });
}


const [hide, sethide] = useState(true);
const [show, setshow] = useState(true);
const validateForm = (event) => {
  event.preventDefault();
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const status = document.querySelector(".status");

  let validation = "Please fill-in the above fields";
  let emailVal = "Email validation error must include @ .com TryAgain!";
  let passVal = "Password char must not be less than 8";
  if(!input1.value) {
    console.warn("validation error");
    status.classList.add("active");
    status.innerHTML = `${validation}`;
  }else{
    emailValidate();
  }
  function emailValidate() { 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!input1.value.match(pattern)){
      console.warn("pattern failed")
      status.classList.add("active");
      status.innerHTML = `${emailVal}`;
    }else{
      console.log("input1 validated");
      status.classList.remove("active");
      input1.classList.add("valid");
    }
   }
   if(!input2.value){
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
   }else{
     passwordValidate();
   }
   function passwordValidate() {
     if(input2.value.length < 8){
       console.warn("Passowrd char must not be less than 8");
       status.classList.add("active");
      status.innerHTML = `${passVal}`;
     }else{
      console.log("input2 validated");
      status.classList.remove("active");
      input2.classList.add("valid");
     }
   }
   if(input1.classList.contains("valid") && input2.classList.contains("valid")){
     console.log('submitted');
     console.log(input1.value)
     if(input1.value==="arun@gmail.com" && input2.value==="12344321"){
      setisadmin(true)
     }
     else{
     setTimeout(() => {
      //  window.location.href = 'AirbnbHome';
      let container = document.querySelector(".bgnd");
      let wrapper = document.querySelector(".imghd");
      sethide(!hide + wrapper.classList.add("hide"));
      setshow(!show + container.classList.add("show"));
     }, 1000);
    }
   }
  }
  const handleMail = () => {
    const input1 = document.querySelector("#input1");
    const status = document.querySelector(".status");
    let validation = "Please fill-in the above fields";
    let emailVal = "Email validation error must include @ .com TryAgain!";
  if(!input1.value) {
    console.warn("validation error");
    status.classList.add("active");
    status.innerHTML = `${validation}`;
  }else{
    emailValidate();
  }
  function emailValidate() { 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!input1.value.match(pattern)){
      console.warn("pattern failed")
      status.classList.add("active");
      status.innerHTML = `${emailVal}`;
    }else{
      console.log("input1 validated");
      status.classList.remove("active");
    }
   }
  }
  const handlePassword  = () => {
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");
  
    let validation = "Please fill-in the above fields";
    let passVal = "Passowrd char must not be less than 8";
     if(!input2.value){
        console.warn("validation error");
        status.classList.add("active");
        status.innerHTML = `${validation}`;
     }else{
       passwordValidate();
     }
     function passwordValidate() {
       if(input2.value.length < 8){
         console.warn("Passowrd char must not be less than 8");
         status.classList.add("active");
        status.innerHTML = `${passVal}`;
       }else{
        console.log("input2 validated");
        status.classList.remove("active");
       }
     }
  }

  return (
  <>
    {admin && <RealtimeData />}
  {!admin        && 
  <>
  
  <Home />
  <div className="imghd">
    <div className="wrapper">
        <div className="content">
          <div className="logo">
            <img src={hotel_logo} alt="" />
          </div>
          <div className="c1">
            <span>Welcome To TAJ Hotels</span>
          </div>
          <div className="form">
            <div className="status"></div>
            <form action="#" onSubmit={validateForm}>
              <div className="eInput">
              <FontAwesomeIcon className='icon' icon={faUser} />
                <input id='input1' type="text" placeholder='Enter Email Address' onKeyUp={handleMail} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div className="eInput">
              <FontAwesomeIcon className='icon' icon={faLock} />
                <input id='input2' type="password" placeholder='Enter Password' onKeyUp={handlePassword} onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <div className="submit">
                <button type="submit" onClick={login}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
}

  </>);
}

export default App1;