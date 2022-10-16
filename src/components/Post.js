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
    const {addPostData} = props
    // 顯示預覽圖
    const [dispytype, setDispytype] = useState('none')
    // 提示文字(?)
    const [tip, setTip] = useState('none')
    // po文內容文字
    const [text, setText] = useState('')
    // 圖片檔案
    const [selectedImageFile, setSelectedImageFile] = useState(null) 
    // 影音檔案
    const [selectedVideoFile, setSelectedVideoFile] = useState(null) 

    // 存取po文內容
    const handleContentChange = (event) => {
        setText(event.target.value)
        console.log(text,"貼文內容");
    }
    // 開上傳圖片檔案input
    const handleClick = (a) => {
        if (a === "image"){
            document.getElementById('input_image_post').click()
        }else{
            document.getElementById('input_video_post').click()
        }
        
    }
    // 存取選擇圖片檔案
    const handleImageFileSelect = (event) => {
        setSelectedImageFile(event.target.files[0])
        setDispytype(true)
        setTip('none')
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
    }
    // 存取選擇影音檔案(暫)
    const handleVideoFileSelect = (event) => {
        setSelectedVideoFile(event.target.files[0])
        setDispytype(true)
        setTip('none')
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
    }
    // 發佈貼文
    const formData = new FormData();
    const onFinish = () => {
        // 暫時先以判斷有無圖片
        if(!selectedImageFile){
            setTip(true)
        }else{
            // const formData = new FormData();
            formData.append("file", selectedImageFile);
            formData.append("content", text);
            
            setText('')
            setSelectedImageFile(null)
            setDispytype('none')
            console.log("發佈成功");
            // addPostData()

            // api.post("/newPost", formData)
            //     .then((result) => {
            //         console.log(result);
            //         settext('')
            //         setselectedFile(null)
            //         setdispytype('none')
            //         getPost()
            //             .then((result) => {
            //                 setpostData(result.data.result)
    
            //             })
            //             .catch((err) => {
            //                 ToastError(err);
            //             });
            //     })
            //     .catch((err) => {
            //         ToastError(err);
            //     });
        }
       
    }
    return (
        <div>
            <Card className="box-card">
                <div className="card-header" >
                    <Avatar size={40} src={userImg} />
                    <div className="detail">
                        <TextArea placeholder="你正在想什麼呢?" showCount maxLength={100} style={{ height: 80 }} onChange={handleContentChange} value={text}/>
                        <div style={{ display: 'flex', justifyContent: 'end', margin: '18px', alignItems: 'center' }}>
                            <div style={{ color: 'red', marginRight: '10px', display: tip }}>請上傳圖片</div>
                            <PictureTwoTone twoToneColor='#6087BF' style={{ cursor: 'pointer', fontSize: '25px' }} onClick={() => handleClick("image")} />
                            <input type="file" id="input_image_post" accept=".jpg,.jpeg,.png" style={{ display: 'none' }} onChange={handleImageFileSelect} />
                            <VideoCameraTwoTone twoToneColor='#6087BF' style={{ cursor: 'pointer', fontSize: '25px' }} onClick={() => handleClick("video")} />
                            <input type="file" id="input_video_post" accept=".mp3,.wmv" style={{ display: 'none' }} onChange={handleVideoFileSelect} />
                            <Button onClick={onFinish} style={{ marginLeft: '10px', background: '#6087BF', color: '#FFF', borderRadius: '6px' }}>
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