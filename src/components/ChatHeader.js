import  {Cookies, useCookies} from "react-cookie"


const ChatHeader = ({user}) =>{
   //console.log(user.first_name)
   //const frst = user.first_name
    const[cookies,setCookie,removeCookie] = useCookies(["user"])
    const Logout =()=>{

            removeCookie('UserId',Cookies.UserId)
            removeCookie('AuthID',Cookies.AuthToken)
            window.location.reload()
    }

    
    return(
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src='{user.url}' alt={"'s photo"} />
                </div>
                <h3>s</h3>
            </div>
            <i className="log-out-icon" onClick={Logout}>⇦</i>
        </div>
    )

  
}

export default ChatHeader