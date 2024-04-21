import React from 'react';
import ChatHeader from './ChatHeader';
import ChatDisplay from './ChatDisplay'; // Renamed from ChatHeader
import MatchesDisplay from './MatchesDisplay'; // Renamed from ChatHeader

const ChatContainer = () => {
    return (
    
    <div className="chat-container">
        <ChatHeader/>
        
        <div>
            <button className="option">Matches</button>
            <button className="option">Chat</button>
        </div>

        <MatchesDisplay/>

        <ChatDisplay/>
    </div>
    )
}

export default ChatContainer