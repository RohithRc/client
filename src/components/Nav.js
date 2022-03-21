import React from "react";

function Nav ({minimal,setshowmodel,showmodel,setIssignup}){
   
    function handleclick(){
       return(
           setshowmodel(true),
           setIssignup(false)
       )
   }

   const auth = false
    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? "https://w7.pngwing.com/pngs/168/179/png-transparent-social-media-logo-tinder-computer-icons-social-media-logo-monochrome-social-media.png" : "https://www.citypng.com/public/uploads/preview/-11600606738nlhuqo2wdw.png"} alt="tinderLogo"/>
            </div>

            {!auth && !minimal &&
            <button className="nav-button" onClick={handleclick} disabled={showmodel}>Log in</button>} 
        </nav>
        
    ) 
}

export default Nav;