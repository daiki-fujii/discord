import React from 'react'
import "./Chat.css"
import ChatHeader from "./ChatHeader"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import GifIcon from "@material-ui/icons/Gif"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import Message from "./Message";

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat__input">
                <AddCircleIcon font-size="large"/>
                <form>
                    <input placeholder={`Message #TESTCAHNNEL`}/>
                    <button className="chat__inputButton" tyoe="submit">
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon font-size="large"/>
                    <GifIcon font-size="large"/>
                    <EmojiEmotionsIcon font-size="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
