export default function ChatTitle(props) {
    const {item} = props;
    return (
        <div className="chatBoxPerson">
            <img className="chatBoxImg"
                src={item?.img}
                alt=""
            />
            <span className="chatBoxName">
                {item?.name}
            </span>
            <span className="chatBoxOnline">
                ●
            </span>
        </div>
    )
}