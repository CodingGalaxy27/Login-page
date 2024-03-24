import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import React, { useState } from 'react'
import './sign.css';
import  signup3rbg  from './signup3rbg.png'


const Signup = () => {
const[name,setname]=useState("")
const[email,setemail]=useState("")
const[mobile,setmobile]=useState("")




function aka ()
 {
    this.name=function add(e){
        setname(e.target.value)        
    }
    this.email=function emmail(e)
    {
        setemail(e.target.value)
    }
    this.mob=function mobile(e)
    {
        setmobile(e.target.value)
    }
 }

 let naam=new aka()//emtyyaa podalum eduthukom  ,onnume podanalum eduthukom 

function handlesubmit(s)
{
    this.sun=function hj(s){
        s.preventDefault()
        if(!name ,!email,!mobile)  return;setname("")
        if(!name ,!email,!mobile)  return;setemail("")
        if(!name ,!email,!mobile)  return;setmobile("")
    }
   
    console.log("submitted")

}
let frmsubmit=new handlesubmit("")

  return (
    <>
<div className='bgclr'>
<div className='colour'>
    
<div className='imgcrd'>

<div className='img'>
    <img src={signup3rbg} width={385} height={300}   >

    </img>
</div>   
</div>
<div className="cd">
<form action={frmsubmit.sun}>
<div className='gsgn'><h1 >Sign up</h1></div>
<input type="text" value={name} className="fname" placeholder='Full name' onChange={event=>naam.name(event) }/>

<input type="text" value={email} className="femail" placeholder='Email Address' onChange={event=>naam.email(event) }/>
<input type="text" value={mobile} className="fmob" placeholder='Mobile no' onChange={event=>naam.mob(event) }/>

<button type='submit' onClick={(s)=>frmsubmit.sun(s)} className='ebtn'>Get Started</button>
<h1 className='mem'>Already a member </h1>
<Link to="/signin">Sign in </Link>
</form>


    </div>
</div>

</div>
    </>  
  )
}
export default Signup



