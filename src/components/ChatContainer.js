import MatchesDisplay from "./MatchesDisplay";
import ChatHeader from "./ChatHeader";
import ChatDisplay from "./ChatDisplay";


const ChatContainer = ({user}) => {
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