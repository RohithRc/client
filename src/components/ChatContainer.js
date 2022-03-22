import MatchesDisplay from "./MatchesDisplay";
import ChatHeader from "./ChatHeader";
import ChatDisplay from "./ChatDisplay";
import { useReducer } from "react";


const ChatContainer = ({user}) => {


    console.log(user.first_name)
    return (<div className="chat-container">
        <ChatHeader user = {user}/>
        <div>
        <button className="option">Matches</button>
        <button className="option">Chats</button>
        </div>

        <MatchesDisplay />
        <ChatDisplay />
    </div>)
}

export default ChatContainer;