import React, { Component, useState } from 'react';
import { InitContext } from '../index';
import { Avatar, Card, Form, Input, Button, Upload, message, Image } from 'antd';
import '../style/Post.scss'
import { PictureTwoTone, UserOutlined ,VideoCameraTwoTone} from '@ant-design/icons';
import userImg from '../assets/uu/ch1.jpg'

// import { api } from "../components/AxiosDefault";
// import ToastError from "../components/ErrorReq";
const { TextArea } = Input;

const Post = (props) => {
    const [dispytype, setdispytype] = useState('none')
    const [tip2, setTip2] = useState('none')
    return (
        // <div>
        //     <Card className="box-card">
        //         <div className="card-header" >
        //             <Avatar size={40} src={headshot} />
        //             <div className="detail">

        //                 <TextArea placeholder="你正在想什麼呢?" showCount maxLength={100} style={{ height: 80 }} onChange={handleFileSelectt} value={text} />
        //                 <div style={{ display: 'flex', justifyContent: 'end', margin: '18px',alignItems:'center' }}>

        //                     <div style={{ color: 'red',marginRight:'10px', display: tip2 }}>請上傳圖片</div>
        //                     <PictureTwoTone twoToneColor='#6087BF' style={{ cursor: 'pointer', fontSize: '25px' }} onClick={() => handleClick()} />
        //                     <input type="file" id="input_post" accept=".jpg,.jpeg,.png" style={{ display: 'none' }} onChange={handleFileSelect} />
        //                     <Button onClick={onFinish} style={{ marginLeft: '10px', background: '#6087BF', color: '#FFF', borderRadius: '6px' }}>
        //                         發佈
        //                     </Button>
        //                 </div>
        //                 <img id="output" style={{ width: '80%', display: dispytype }} type='hidden' />
        //             </div>
        //         </div>
        //     </Card>
        // </div>
        <div>
            <Card className="box-card">
                <div className="card-header" >
                    <Avatar size={40} src={userImg} />
                    <div className="detail">
                        {/* <TextArea placeholder="你正在想什麼呢?" showCount maxLength={100} style={{ height: 80 }} onChange={handleFileSelectt} value={text} /> */}
                        <TextArea placeholder="你正在想什麼呢?" showCount maxLength={100} style={{ height: 80 }} />

                        <div style={{ display: 'flex', justifyContent: 'end', margin: '18px', alignItems: 'center' }}>

                            <div style={{ color: 'red', marginRight: '10px', display: tip2 }}>請上傳圖片</div>
                            {/* <PictureTwoTone twoToneColor='#6087BF' style={{ cursor: 'pointer', fontSize: '25px' }} onClick={() => handleClick()} /> */}
                            <PictureTwoTone twoToneColor='#6087BF' style={{ cursor: 'pointer', fontSize: '25px' ,marginRight:'8px'}} />

                            {/* <input type="file" id="input_post" accept=".jpg,.jpeg,.png" style={{ display: 'none' }} onChange={handleFileSelect} /> */}
                            <input type="file" id="input_post" accept=".jpg,.jpeg,.png" style={{ display: 'none' }} />
                            <VideoCameraTwoTone twoToneColor='#6087BF' style={{ cursor: 'pointer', fontSize: '25px' }}/>
                            {/* <Button onClick={onFinish} style={{ marginLeft: '10px', background: '#6087BF', color: '#FFF', borderRadius: '6px' }}>
                            發佈
                        </Button> */}
                            <Button style={{ marginLeft: '10px', background: '#6087BF', color: '#FFF', borderRadius: '6px' }}>
                                發佈
                            </Button>
                        </div>
                        <img id="output" style={{ width: '80%', display: dispytype }} type='hidden' />
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Post;