import React from "react";
import Nav from "./components/Nav";
import { useState } from "react";
import Authmodel from "./components/Authmodel";

function Home() {
    const [showmodel, setshowmodel] = useState(false)
    const [issignup, setIssignup] = useState(true)
    const auth = false;

    function handleClick() {
        return (
            setshowmodel(true),
            setIssignup(true)
        )
    }
    return (
        <div className="overlay">
            <div className="home">
                <Nav minimal={false} 
                setshowmodel={setshowmodel} 
                showmodel={showmodel}
                setIssignup={setIssignup}                
                />
                <h1 className="primary-title">Swipe Right</h1>
                <button className="primary-button" onClick={handleClick}>{auth ? "Signout" : "Create Account"} </button>

                {showmodel && (<Authmodel setshowmodel={ setshowmodel } issignup={issignup}/>)} 
            </div>
        </div>
    )
}

export default Home;