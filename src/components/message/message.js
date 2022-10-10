import '../../style/Message.scss'

export default function Message(props) {
    const {message, friend} = props;
    return (
        <div className={message.sent === friend.userId ? "message" : "message own"}>
            <div className="messageTop">
                { message.sent === friend.userId ? <img className="messageImg"
                src={friend.img}
                alt="" /> : <></>}
                <span className="messageText">{message.text}</span>
            </div>
            {/* <div className="messageBottom">早上8:00</div> */}
        </div>
    )
}