import React, { Component, useContext, useState } from 'react';
import { InitContext } from '../index';
// import { api } from "../components/AxiosDefault";
// import ToastError from "../components/ErrorReq";
import '../style/PostCard.scss'
import { Avatar, Modal, Card, Divider, Input, Drawer, Collapse, Comment, Form, Button, List } from 'antd';
import { HeartOutlined, HeartTwoTone, LikeOutlined, LikeTwoTone, CommentOutlined, EditTwoTone, ExclamationCircleOutlined, EllipsisOutlined, FormOutlined, DeleteOutlined, DeleteTwoTone, UserOutlined, ShareAltOutlined } from '@ant-design/icons';
// const contextData = useContext(InitContext); //取得數據
import moment from 'moment';
import { Switch } from 'react-router-dom';
import userImg from '../assets/uu/ch1.jpg'

const { TextArea } = Input;
const { Panel } = Collapse;



// const Editor = ({ onChange, onSubmit, value }) => (
//     // const Editor = ({ onChange, onSubmit,  value }) => (
//     <>
//         <Form.Item >
//             <TextArea rows={1} onChange={onChange} value={value} />
//         </Form.Item>
//         <Form.Item >
//             <Button htmlType="submit" onClick={onSubmit} style={{ background: '#6087BF', color: '#FFF', borderRadius: '6px' }}>
//                 {/* <Button htmlType="submit" onClick={onSubmit} style={{ background: '#6087BF', color: '#FFF', borderRadius: '6px' }}> */}
//                 留言
//             </Button>
//         </Form.Item>
//     </>
// );

// const CommentList = ({ comments, setmodal, myuserid, setmsgid }) => (
//     <List
//         dataSource={comments}
//         header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
//         itemLayout="horizontal"

//         renderItem={props =>

//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                 <Comment author={props.userName} avatar={props.headshot} content={props.msg} datetime={props.time} />
//                 {props.userId === myuserid &&//userId目前是2
//                     <div>
//                         <EditTwoTone style={{ marginRight: '20px', fontSize: '20px', cursor: 'pointer' }} onClick={() => { setmodal('編輯留言', props.msg); setmsgid(props.msgId) }} />
//                         <DeleteTwoTone style={{ marginRight: '20px', fontSize: '20px', cursor: 'pointer' }} onClick={() => { setmodal('刪除留言'); setmsgid(props.msgId) }} />
//                     </div>
//                 }
//             </div>}
//     />
// );
const PostCard = props => {
    const { setpostData, getPost, myuserid, postInfo, changeLove, changeThumb, headshot } = props;
    const [isModalVisible, setisModalVisible] = useState(false)
    const [Modaltype, setModaltype] = useState('')
    const [visible, setvisible] = useState(false)
    const [comments, setcomments] = useState([])
    const [value, setvalue] = useState('')
    const [visiblecoments, setvisiblecoments] = useState('none')
    const [inputtext, setinputtext] = useState('')
    const [msgid, setmsgid] = useState(0)
    // const [reportcontent, setreportcontent] = useState([
    //     {
    //         reportid: 1,
    //         reportuserid: '1',
    //         reportpostid: '1',
    //         recontent: '1'
    //     }

    // ])



    // const getMsg = (postId) => {
    //     console.log('post');
    //     return api.get("/getMsg/" + postId);
    // };

    // //留言是否顯示
    // const onchangeVisiblecoments = (postId) => {
    //     if (visiblecoments === 'none') {
    //         console.log('onchangeVisiblecoments');
    //         // 抓留言
    //         getMsg(postId).then((result) => {
    //             setcomments(result.data.result)
    //         })
    //             .catch((err) => {
    //                 ToastError(err);
    //             });
    //         // fetch("http://blog.vhost.com/getMsg/" + postId, {
    //         //     method: "GET",
    //         //     headers: new Headers({
    //         //         'Token': localStorage.getItem("Token")
    //         //     })
    //         // })
    //         //     .then(res => res.json())
    //         //     .then(data => {
    //         //         console.log(data.result);
    //         //         setcomments(data.result)
    //         //         /*接到request data後要做的事情*/
    //         //     })
    //         //     .catch(e => {
    //         //         /*發生錯誤時要做的事情*/
    //         //         console.log(e);
    //         //     })
    //         setvisiblecoments(true)
    //     } else {
    //         setvisiblecoments('none')
    //         // setState({ visiblecoments: 'none' })
    //     }
    // }

    // //送出留言
    // const handleSubmit = () => {
    //     if (!value) {
    //         return;
    //     }

    //     api.post("/newMsg", { 'postId': postInfo.postId, 'msg': value }).then((result) => {
    //         console.log(result);
    //         getMsg(postInfo.postId).then((result) => {
    //             setcomments(result.data.result)
    //         })
    //             .catch((err) => {
    //                 ToastError(err);
    //             });
    //         // setState({ value: ''})
    //         setvalue('')

    //     })
    //         .catch((err) => {
    //             ToastError(err);
    //         });
    //     // setvalue('')
    // };

    // //留言input改變字
    // const handleChangecomment = e => {
    //     // console.log(e.target.value);
    //     setvalue(e.target.value)
    // };

    // //右上三個點
    // const showDrawer = () => {
    //     setvisible(true)
    // };
    // const onClose = () => {
    //     setvisible(false)
    // };

    // // Modal跳出對話框，判斷是什麼事件
    // const setModal = (type, content) => {
    //     setisModalVisible(true)
    //     setModaltype(type)
    //     if (type === '編輯貼文') {
    //         setinputtext(postInfo.content)
    //     }
    //     else if (type === '編輯留言') {
    //         setinputtext(content)
    //     }
    // }


    // //Modal對話框內容
    // const modalContent = () => {
    //     switch (Modaltype) {
    //         case '檢舉貼文':
    //             return (<div>檢舉原因：<br /><Input value={inputtext} onChange={inputChange} /></div>);
    //         case '編輯貼文':
    //             return (<div>貼文：<br /><Input value={inputtext} onChange={inputChange} /></div>)
    //         case '編輯留言':
    //             return (<div>留言：<br /><Input value={inputtext} onChange={inputChange} /></div>)
    //         case '刪除留言':
    //             return (<div>是否刪除此留言</div>);
    //         default:
    //             return (<div>是否刪除此貼文</div>);
    //     }
    // }
    // //Modal對話框確認
    // const handleOk = () => {
    //     switch (Modaltype) {
    //         case '檢舉貼文':
    //             api.post("/newReport", { 'postId': postInfo.postId, 'reason': inputtext })
    //                 .then((result) => {
    //                     console.log(result.data);
    //                 })
    //                 .catch((err) => {
    //                     ToastError(err);
    //                 });
    //             setinputtext('')
    //             setisModalVisible(false)
    //             return 0;
    //         case '編輯貼文':
    //             api.put("/updatePost", { 'postId': postInfo.postId, 'content': inputtext }).then((result) => {
    //                 console.log(result.data);
    //                 getPost()
    //                     .then((result) => {
    //                         setpostData(result.data.result)
    //                     })
    //                     .catch((err) => {
    //                         ToastError(err);
    //                     });
    //             })
    //                 .catch((err) => {
    //                     ToastError(err);
    //                 });
    //             setinputtext('')
    //             setisModalVisible(false)
    //             return 0;
    //         case '刪除貼文':
    //             console.log( postInfo.postId );

    //             api.delete("/delPost", { data: { 'postId': postInfo.postId } }).then((result) => {
    //                 console.log(result.data);
    //                 getPost()
    //                     .then((result) => {
    //                         setpostData(result.data.result)
    //                     })
    //                     .catch((err) => {
    //                         ToastError(err);
    //                     });
    //             })
    //                 .catch((err) => {
    //                     ToastError(err);
    //                 });
    //             setinputtext('')
    //             setisModalVisible(false)
    //             return 0;
    //         case '刪除留言':
    //             api.delete("/delMsg", { data: { 'msgId': msgid } }).then((result) => {
    //                 console.log(result.data);
    //                 getMsg(postInfo.postId).then((result) => {
    //                     setcomments(result.data.result)
    //                 })
    //                     .catch((err) => {
    //                         ToastError(err);
    //                     });
    //             })
    //                 .catch((err) => {
    //                     ToastError(err);
    //                 });
    //             setinputtext('')
    //             setisModalVisible(false)
    //             return 0;
    //         case '編輯留言':
    //             api.put("/updateMsg", { 'msgId': msgid, 'msg': inputtext }).then((result) => {
    //                 console.log(result.data);
    //                 getMsg(postInfo.postId).then((result) => {
    //                     setcomments(result.data.result)
    //                 })
    //                     .catch((err) => {
    //                         ToastError(err);
    //                     });
    //             })
    //                 .catch((err) => {
    //                     ToastError(err);
    //                 });
    //             setinputtext('')
    //             setisModalVisible(false)
    //             return 0;
    //         default:
    //             setisModalVisible(false)
    //             setinputtext('')
    //             return 0;
    //     }
    // };
    // //Modal對話框取消
    // const handleCancel = () => {
    //     setisModalVisible(false)
    //     setinputtext('')
    // };

    // //Modal對話框input改變字
    // const inputChange = (event) => {
    //     const { value } = event.target
    //     setinputtext(value)
    // }


    return (
        // <div>
        //     <Modal title={Modaltype} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="確認" cancelText='取消'	>
        //         {modalContent()}
        //     </Modal>
        //     <Card className="box-card">
        //         <div className="card-header">
        //             <Avatar size={40} src={postInfo.headshot} icon={<UserOutlined />} />
        //             <div className="detail">
        //                 <span className="username">{postInfo.userName}</span>
        //                 <span className="time">{postInfo.postTime}</span>
        //                 <span className="content">{postInfo.content}</span>
        //             </div>
        //             <EllipsisOutlined onClick={showDrawer} />
        //             {myuserid === postInfo.userId ?
        //                 <div>
        //                     <Drawer
        //                         placement='bottom'
        //                         closable={false}
        //                         onClose={onClose}
        //                         visible={visible}
        //                         key='bottom'
        //                         height='100px'
        //                     >
        //                         <p onClick={() => setModal('編輯貼文')} style={{ cursor: 'pointer' }} ><FormOutlined style={{ marginRight: '15px' }} />編輯貼文</p>
        //                         <p onClick={() => setModal('刪除貼文')} style={{ cursor: 'pointer' }} ><DeleteOutlined style={{ marginRight: '15px' }} />刪除貼文</p>
        //                     </Drawer>
        //                 </div>
        //                 :
        //                 <div>
        //                     <Drawer
        //                         placement='bottom'
        //                         closable={false}
        //                         onClose={onClose}
        //                         visible={visible}
        //                         key='bottom'
        //                         height='60px'
        //                     >
        //                         <p onClick={() => setModal('檢舉貼文')} style={{ cursor: 'pointer' }} ><ExclamationCircleOutlined style={{ marginRight: '15px' }} />檢舉貼文</p>
        //                     </Drawer>
        //                 </div>
        //             }
        //         </div>
        //         <div className="card-content">
        //             <img src={postInfo.file} />
        //         </div>
        //         <Divider />
        //         <div className="like-com">
        //             {/* 這邊是按讚 */}
        //             <div className="icon">
        //                 {postInfo.thumbid
        //                     ? <LikeTwoTone onClick={() => changeThumb(postInfo.postId, postInfo.thumbid)} />
        //                     : <LikeOutlined onClick={() => changeThumb(postInfo.postId, postInfo.thumbid)} />
        //                 }
        //             </div>
        //             <Divider type="vertical" />
        //             {/* 這邊是留言 */}
        //             <div className="icon" onClick={() => onchangeVisiblecoments(postInfo.postId)}>
        //                 <CommentOutlined />
        //             </div>
        //             <Divider type="vertical" />
        //             {/* 這邊是收藏 */}
        //             <div className="icon">
        //                 {postInfo.loveid
        //                     ? <HeartTwoTone twoToneColor='#F00' onClick={() => changeLove(postInfo.postId, postInfo.loveid)} />
        //                     : <HeartOutlined onClick={() => changeLove(postInfo.postId, postInfo.loveid)} />
        //                 }
        //             </div>
        //         </div>
        //         <div style={{ display: visiblecoments }}>
        //             {comments.length > 0 && <CommentList comments={comments} setmodal={setModal} myuserid={myuserid} setmsgid={setmsgid} />}

        //             <Comment
        //                 avatar={<Avatar src={headshot} alt="Susanna" />}
        //                 content={
        //                     <Editor
        //                         onChange={handleChangecomment}
        //                         onSubmit={handleSubmit}
        //                         value={value}
        //                     />
        //                 }
        //             />
        //         </div>
        //     </Card>
        // </div>




        


        <div>
            {/* <Modal title={Modaltype} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="確認" cancelText='取消'	>
                {modalContent()}
            </Modal> */}
            <Card className="box-card">
                <div className="card-header">
                    {/* <Avatar size={40} src={postInfo.headshot} icon={<UserOutlined />} /> */}
                    <Avatar size={40} src={userImg} icon={<UserOutlined />} />
                    <div className="detail">
                        <span className="username">{postInfo.userName}</span>
                        <span className="time">{moment(postInfo.postTime).format("YYYY-MM-DD HH:mm:ss")}</span>
                        <span className="content">{postInfo.content}</span>
                        <img src={postInfo.file} alt="" onClick={()=>{console.log("hi");}} />
                    </div>
                    {/* <EllipsisOutlined onClick={showDrawer} /> */}
                    <EllipsisOutlined  />

                    {/* {myuserid === postInfo.userId ?
                        <div>
                            <Drawer
                                placement='bottom'
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                                key='bottom'
                                height='100px'
                            >
                                <p onClick={() => setModal('編輯貼文')} style={{ cursor: 'pointer' }} ><FormOutlined style={{ marginRight: '15px' }} />編輯貼文</p>
                                <p onClick={() => setModal('刪除貼文')} style={{ cursor: 'pointer' }} ><DeleteOutlined style={{ marginRight: '15px' }} />刪除貼文</p>
                            </Drawer>
                        </div>
                        :
                        <div>
                            <Drawer
                                placement='bottom'
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                                key='bottom'
                                height='60px'
                            >
                                <p onClick={() => setModal('檢舉貼文')} style={{ cursor: 'pointer' }} ><ExclamationCircleOutlined style={{ marginRight: '15px' }} />檢舉貼文</p>
                            </Drawer>
                        </div>
                    } */}
                </div>
                {/* <div className="card-content">
                    <img src={postInfo.file} />
                </div> */}
                <Divider />
                <div className="like-com">
                    {/* 這邊是收藏 */}
                    <div className="icon">
                        {/* {postInfo.loveid
                            ? <HeartTwoTone twoToneColor='#F00' onClick={() => changeLove(postInfo.postId, postInfo.loveid)} />
                            : <HeartOutlined onClick={() => changeLove(postInfo.postId, postInfo.loveid)} />
                        } */}
                        <HeartOutlined />
                    </div>
                    <Divider type="vertical" />
                    {/* 這邊是留言 */}
                    {/* <div className="icon" onClick={() => onchangeVisiblecoments(postInfo.postId)}>
                        <CommentOutlined />
                    </div> */}
                    <div className="icon">
                        <CommentOutlined />
                    </div>
                    <Divider type="vertical" />
                     {/* 這邊是分享 */}
                     {/* <div className="icon" onClick={() => onchangeVisiblecoments(postInfo.postId)}>
                     <ShareAltOutlined />
                    </div> */}
                    <div className="icon">
                     <ShareAltOutlined />
                    </div>
                </div>
                {/* <div style={{ display: visiblecoments }}>
                    {comments.length > 0 && <CommentList comments={comments} setmodal={setModal} myuserid={myuserid} setmsgid={setmsgid} />}

                    <Comment
                        avatar={<Avatar src={headshot} alt="Susanna" />}
                        content={
                            <Editor
                                onChange={handleChangecomment}
                                onSubmit={handleSubmit}
                                value={value}
                            />
                        }
                    />
                </div> */}
            </Card>
        </div>
    );
};

export default PostCard;