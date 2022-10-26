export default function userUpload(props) {
    return (
        <div>
            {props.item.length > 0 ? (
                <div>
                    {props.item.map((i) => {
                        return (
                            <div key={i.id} style={{'float':'left','width':'15vw','height':'45vh','margin':'1.5vw'}}>
                                <div style={{'width':'75%'}}>
                                    <img src={i.img} alt="" style={{'width':'100%'}} />
                                </div>
                                {props.page}作品{i.name}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div style={{padding:'10px 20px'}}>
                    目前尚無{props.page}的作品
                </div>
            )}
        </div>
    )
}