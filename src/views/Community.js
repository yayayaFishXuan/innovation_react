import React, { Component, useContext, useState, useEffect, useRef } from 'react';
// import { InitContext } from '../index';
// import { Row, Col, Affix, Divider, Avatar, Card } from 'antd';
import '../style/Community.scss'
import Post from '../components/Post'
import PostCard from '../components/PostCard'
import moment from "moment";
import { LaptopOutlined, NotificationOutlined, UserOutlined, HomeFilled, HeartFilled, MessageFilled, SearchOutlined,CompassFilled } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Divider, List, Avatar } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';

import "../style/Messager.scss";
import { notification } from 'antd';
import ChatTitle from "../components/chatbox/ChatTitle";
import Chat from "../components/chatbox/Chat";

const Community = (props) => {
    const { Content, Sider } = Layout;
    const [postData,setPostData] = useState([{
        postId:1,
        userName:'Anna',
        content:'hihi',
        file:require('../assets/uu/cat1.jpg'),
        postTime:'2020-04-22',
        // status:true,
        // isThumb:true,
        // isLove:true,
        userId: 1,
        userImg:"data.user_img",
        comments:[
            {
                commentsid:1,
                userid:2,
                avatar:require('../assets/user/user.jpg'),//留言者頭貼
                author:'Susanna',//留言者姓名
                content:'hi~',//留言內容
                datetime:'2020-04-22'//留言時間
            },
            {
                commentsid:2,
                userid:3,
                avatar:require('../assets/uu/cat1.jpg'),
                author:'Diane',
                content:'哈囉',
                datetime:'2020-04-22'
            },
            {
                commentsid:3,
                userid:1,
                avatar:require('../assets/uu/cat1.jpg'),
                author:'Anna',
                content:'你好你好',
                datetime:'2020-04-22'
            }
        ]
    },
    {                  
        postId:2,
        userName:'Susanna',
        content:'天氣真好',
        file:require('../assets/uu/cat1.jpg'),
        postTime:'2020-04-22',
        // status:true,
        // isThumb:true,
        // isLove:false,
        userId:2,
        userImg:require('../assets/user/user.jpg'),
        comments:[]
    },
    {
        postId:3,
        userName:'Diane',
        content:'La~La~La~',
        file:require('../assets/uu/cat1.jpg'),
        postTime:'2020-04-22',
        // status:true,
        // isThumb:false,
        // isLove:false,
        userId: 2,
        userImg:"data.user_img",
        comments:[]
    }])
    // const postData = [
    //     {
    //         postId:1,
    //         userName:'Anna',
    //         content:'hihi',
    //         file:require('../assets/uu/cat1.jpg'),
    //         postTime:'2020-04-22',
    //         // status:true,
    //         // isThumb:true,
    //         // isLove:true,
    //         userId: 1,
    //         userImg:"data.user_img",
    //         comments:[
    //             {
    //                 commentsid:1,
    //                 userid:2,
    //                 avatar:require('../assets/user/user.jpg'),//留言者頭貼
    //                 author:'Susanna',//留言者姓名
    //                 content:'hi~',//留言內容
    //                 datetime:'2020-04-22'//留言時間
    //             },
    //             {
    //                 commentsid:2,
    //                 userid:3,
    //                 avatar:require('../assets/uu/cat1.jpg'),
    //                 author:'Diane',
    //                 content:'哈囉',
    //                 datetime:'2020-04-22'
    //             },
    //             {
    //                 commentsid:3,
    //                 userid:1,
    //                 avatar:require('../assets/uu/cat1.jpg'),
    //                 author:'Anna',
    //                 content:'你好你好',
    //                 datetime:'2020-04-22'
    //             }
    //         ]
    //     },
    //     {                  
    //         postId:2,
    //         userName:'Susanna',
    //         content:'天氣真好',
    //         file:require('../assets/uu/cat1.jpg'),
    //         postTime:'2020-04-22',
    //         // status:true,
    //         // isThumb:true,
    //         // isLove:false,
    //         userId:2,
    //         userImg:require('../assets/user/user.jpg'),
    //         comments:[]
    //     },
    //     {
    //         postId:3,
    //         userName:'Diane',
    //         content:'La~La~La~',
    //         file:require('../assets/uu/cat1.jpg'),
    //         postTime:'2020-04-22',
    //         // status:true,
    //         // isThumb:false,
    //         // isLove:false,
    //         userId: 2,
    //         userImg:"data.user_img",
    //         comments:[]
    //     }
    // ];
    const friend = [
        {
            userId: 1,
            name: 'test1',
            img: '/uu/cat1.jpg',
        },
        {
            userId: 2,
            name: 'test2',
            img: '/uu/cat2.jpg',
        },
        {
            userId: 3,
            name: 'test3',
            img: '/uu/cat3.jpg',
        },
        {
            userId: 4,
            name: 'test4',
            img: '/uu/cat4.jpg',
        },
    ];

    const openNotification = (item) => {
        // 開聊天室窗 抓對話紀錄
        notification.destroy(); //避免多開
        notification.open({
            closeIcon: null,
            bottom: 5,
            message: <ChatTitle item={item} />, //標題
            description: <Chat item={item} />, //內容
            placement: 'bottomRight', //開啟位置
            duration: null, //自動關閉視窗
            style: {
                width: '250px',
                height: '300px',
                backgroundColor: '#fefefe',
            },
        });
    };
    const addPostData = Udata =>{
        setPostData(preUdata=>[
          ...preUdata,
          {
            // id:preUdata[preUdata.length-1].id+1,
            // name:collectionWorks[selectWhat].name,
            // author:collectionWorks[selectWhat].author,
            // intro:collectionWorks[selectWhat].intro,
            // tag:collectionWorks[selectWhat].tag,
            // img:collectionWorks[selectWhat].img,
            ...Udata
          }
        ])
        
        notification.success({
          message: "通知",
          description: "上架成功",
          duration: 2,
          placemen: "topLeft",
        });
      }

    return (
        <div style={{ display: 'flex' }}>

            {/* <Layout> */}


            <Sider width={250} className="site-layout-background" style={{ background: 'white', position: 'fixed' }}>
                <div>
                    <Menu
                        mode="vertical"

                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                    >
                        <Menu.Item key="/Community">
                            <HomeFilled style={{color:'#6087BF',fontSize:'18px'}}/><span style={{fontSize:'15px'}}>首頁</span>
                            <Link to="/Community"></Link>
                        </Menu.Item>
                        <Menu.Item key="/ComFollow">
                            <CompassFilled style={{color:'#6087BF',fontSize:'18px'}}/><span style={{fontSize:'15px'}}>追蹤</span>
                            <Link to="/ComFollow"></Link>
                        </Menu.Item>
                        <Menu.Item key="/ComLove">
                            <HeartFilled style={{color:'#6087BF',fontSize:'18px'}}/><span style={{fontSize:'15px'}}>收藏</span>
                            <Link to="/ComLove"></Link>
                        </Menu.Item>
                        <Menu.Item key="/ComTan">
                            <SearchOutlined style={{color:'#6087BF',fontSize:'18px'}}/><span style={{fontSize:'15px'}}>探索</span>
                            <Link to="/ComTan"></Link>
                        </Menu.Item>
                    </Menu>
                </div>

                <div style={{ background: 'white' }}>
                    <div style={{ borderTop: "1px solid #B7B2BB" }}></div>
                    <span style={{ textAlign: 'center', display: 'block' ,fontSize:'20px'}}>朋友</span>
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={friend}
                            split={false}
                            renderItem={(item) => (
                                <List.Item onClick={()=>openNotification(item)} style={{cursor: 'pointer'}}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.img} style={{ marginLeft: '10px' }} />}
                                        title={<div style={{ display: 'flex', flex: 1 }}><div style={{ display: 'flex', flex: 0.9 }}>{item.name}</div><span style={{ color: 'green', display: 'flex', flex: 0.1 }}>●</span></div>}
                                     />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>

            </Sider>

            <div style={{ width: '300px' }} />


            {/* <Layout width={1000} style={{ background: 'white' }}> */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '75%', marginLeft: '5px', marginRight: '5px' }}>
                <Post addPostData={addPostData}/>
                {postData.map((pp) => {
                    return (
                        <PostCard
                            key={pp.postId}
                            postInfo={pp}
                            label="postcontent"
                        />
                    )

                })}
            </div>
            
            {/* </Layout> */}
            {/* <Layout> */}
            {/* <div style={{ width: '15%', textAlign: 'center',marginLeft:'85%',position:'fixed',marginTop:'10px' }}>

                <span style={{fontSize:'20px'}}>推薦用戶</span>

                <div>
                    <List
                        itemLayout="horizontal"
                        dataSource={friend}
                        split={false}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.img} style={{ marginLeft: '10px' }} />}
                                    title={<div style={{ display: 'flex', flex: 1 }}><div style={{ display: 'flex', flex: 0.7 }}>{item.name}</div><span style={{ color: '#6087BF', display: 'flex', flex: 0.3 }}>追蹤</span></div>}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div> */}

            {/* </Layout> */}
            {/* </Layout> */}

            {/* <Post headshot={headshot} setpostData={setpostData} getPost={getPost} /> */}
            {/* {postData.map((pp) => {
                return (
                    <PostCards
                        key={pp.postId}
                        myuserid={userId}
                        postInfo={pp}
                        label="postcontent"
                        changeLove={changeLove}
                        changeThumb={changeThumb}
                        getPost={getPost}
                        setpostData={setpostData}
                        headshot={headshot}
                    />
                )

            })} */}
            {/* {loading && <div style={{display: 'flex', justifyContent: 'center' }}><LoadingOutlined style={{ fontSize: '40px' }} /></div>} */}
        </div>
    )
}
export default Community
