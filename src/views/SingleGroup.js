import '../style/SingleGroup.scss'

import React, { Component, useContext, useState, useEffect, useRef } from 'react';
import '../style/Community.scss';
import { LaptopOutlined, NotificationOutlined, UserOutlined, HomeFilled, HeartFilled, MessageFilled, SearchOutlined,CompassFilled } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Divider, List, Avatar } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';

import "../style/Messager.scss";
import { notification } from 'antd';
import ChatTitle from "../components/chatbox/ChatTitle";
import Chat from "../components/chatbox/Chat";
import { HeartOutlined } from '@ant-design/icons';

const SingleGroup = (props) => {
    let history = useHistory();
    const { Content, Sider } = Layout;
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

    const groupItem = [
        {
            id: '1',
            name: '收藏作品1',
            author: '作者xxx',
            price: '545.77',
            img: '/storeZip/6.jpg',
            good:true

        },
        {
            id: '2',
            name: '收藏作品2',
            author: '作者xxx',
            price: '545.77',
            img: '/storeZip/7.jpg',
            good:true
        },
        {
            id: '3',
            name: '收藏作品3',
            author: '作者xxx',
            price: '545.77',
            img: '/storeZip/8.jpg',
            good:true
        },
    ]

    return (
        <div style={{ display: 'flex' }}>
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

            <div className="group">
                {groupItem.map((item, key) =>
                    <div key={key} className='eachItem' >
                        <div className='itemImg' >
                            <img src={item.img} alt="" onClick={() => { history.push({ pathname: "/SingleItem", search: '?query=' + item.id, state: { market: item } }) }} />
                            <div style={{ textAlign: 'left', fontSize: '18px', lineHeight: '2' }} >
                                {item.name}
                                {
                                    item.good ? 
                                        <HeartFilled
                                        style={{ float: 'right', paddingTop: '8px',color:'red' }}
                                        onClick={()=>{
                                          
                                            this.setState({
                                            groupItem: groupItem.map((d,k) => {
                                            return d.id === String(key+1)
                                                ? {...d, good: !d.good}
                                                : {...d};
                                            })
                                        })}}
                                        />
                                :
                                    <HeartOutlined
                                    style={{ float: 'right', paddingTop: '8px' }}
                                    onClick={()=>{
                                        this.setState({
                                        groupItem: groupItem.map((d,k) => {
                                        return d.id === String(key+1)
                                            ? {...d, good: !d.good}
                                            : {...d};
                                        })
                                    })}}
                                    />
                                
                                }
                            </div>
                            <div style={{ textAlign: 'left', fontSize: '14px' }}>
                                {item.author}
                                <br />
                                {Math.round((item.price * 100) / 3000) / 100} ETH
                                <br />
                                ${item.price}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default SingleGroup
