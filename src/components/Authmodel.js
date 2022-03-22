import React,{useState} from "react";
import axios from 'axios'
import {useNavigate} from "react-router-dom" 
import {useCookies} from "react-cookie"


function Authmodel({setshowmodel,issignup}){
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmpassword,setConfirmpassword] = useState(null);
    const [error,setError] = useState(null);
    const[cookies,setCookie,removeCookie] = useCookies(["user"])
    
    let navigate = useNavigate()


    console.log(issignup)
    console.log(email,password,confirmpassword)

   const handleclick = () =>{
       setshowmodel(false)
    }

   const handlesubmit =async (e)=>{
        e.preventDefault()
       try{
        if (issignup && (password!==confirmpassword)) {
            setError('passwords need to be matched!!!')
            return
        }
       console.log("data sent",email,password)
       
       const responce = await axios.post(`http://localhost:8000/${issignup ? 'signup' : 'login'}`,{email,password})
        
        setCookie("email",responce.data.email)
        setCookie("UserId",responce.data.userId)
        setCookie("AuthToken",responce.data.token)

        const success = responce.status === 201
        //console.log(success)
        
        if(success && issignup ) navigate('/onboard')
        if(success && !issignup ) navigate('/Dashboard')

        window.location.reload()
    }
       catch(error)
       {
           console.log(error)
       }
    }

    return(

        <div  className="auth-model">
            <button className="close-icon" onClick={handleclick}>x</button>
            <h2>{issignup ? 'Create Account' : "Sign In"} </h2>
            <p>By clicking log in you agree my terms and accept my cookies so be carefull</p>
            <form onSubmit={handlesubmit}>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="email" 
                    required={true}
                    onChange = {(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="password" 
                    required={true}
                    onChange = {(e) => setPassword(e.target.value)}
                />

                {issignup && <input 
                    type="password" 
                    id="password-check" 
                    name="password-check" 
                    placeholder="confirm password" 
                    required={true}
                    onChange = {(e) => setConfirmpassword(e.target.value)}
                />
                }

                <input className="secondary-button" type="submit" />
                <p>{error}</p>
            </form>
            <hr/>
            <h2>GET THE APP</h2>
            Auth model
        </div>
    ) 
}

export default Authmodel;