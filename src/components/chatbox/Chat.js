import React, { Component, useContext, useState, useEffect, useRef } from 'react';
import Message from "../message/message";

const Chat = (props) => {
    const { item } = props;
    const chats =[
        {'id':1,'sent':1,'receive':5,'text':'嗨!'},
        {'id':2,'sent':5,'receive':1,'text':'哈囉!'},
        {'id':3,'sent':2,'receive':5,'text':'嗨嗨'},
        {'id':4,'sent':1,'receive':5,'text':'NFT有什麼特性啊?'},
        {'id':5,'sent':5,'receive':1,'text':'不可替代性'},
        {'id':6,'sent':3,'receive':5,'text':'Hi'},
        {'id':7,'sent':5,'receive':1,'text':'不可分割性'},
        {'id':8,'sent':5,'receive':2,'text':'嗨~'},
        {'id':9,'sent':5,'receive':3,'text':'Hello'},
        {'id':10,'sent':5,'receive':3,'text':'~~~'},
        {'id':11,'sent':5,'receive':1,'text':'獨一無二'},
        {'id':12,'sent':1,'receive':5,'text':'好的'},
        {'id':13,'sent':1,'receive':5,'text':'感謝~'},
    ];
    // 使用者本人的ID
    const userId = 5;
    const chatdata =  chats.filter(c => (c.sent === item.userId || c.receive === item.userId));
    const [currentChat, setCurrentChat] = useState(null);
    // 對話紀錄
    const [messages, setMessages] = useState(chatdata);
    // 新輸入的訊息
    const [newMessage, setNewMessage] = useState("");
    const scrollRef = useRef();
    // setCurrentChat(item);
    // setMessages(chatdata);

    useEffect(()=>{ //讓對話內容平滑的滑到最新
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages]);

    function sendMsg(e) { //傳訊息
        if (newMessage !== ''){
            e.preventDefault();
            const message = {
                id:messages.length+10,
                sent:userId,
                receive:item.userId,
                text:newMessage,
            }
            console.log(message);
            setMessages([...messages,message])
            setNewMessage('')
        }
    }

    return (
        <>
        <div className="chatBoxTop">
            {messages.map((m)=>(
                <div key={m.id} ref={scrollRef}>
                    <Message message={m} friend={item} />
                </div>
            ))}
        </div>
        <div className="chatBoxBottom">
            <input
                className="chatMessageInput"
                placeholder="訊息......"
                onChange={(e)=>setNewMessage(e.target.value)}
                value={newMessage}
            />
            <button className="chatMessageButton" onClick={sendMsg}>
                發送
            </button>
        </div>
        </>
    )
}
export default Chat;
