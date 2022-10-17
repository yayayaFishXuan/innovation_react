import React, { Component, useState,useEffect } from "react";
import { notification, Menu } from 'antd';
import "../style/User.scss";
import { UserOutlined, SettingFilled } from "@ant-design/icons";

const User = (props) => {
  const user = {
    'name': 'Lulu',
    'img': '',
    'backgroundImg':require('../assets/user/PIC.png'),
    'on':3,
    'wait':0,
    'myNFT':3,
    'introduction':'',
  }
  notification.destroy();
  return (
    <div className="user">
        <div className="userBg">
          <img className="bgImg" src={user.backgroundImg} />
        </div>
        <div className="userInfo">
          <UserOutlined className="userImg" />
          <br />
          {user.name}<br />
          <button className="edit" onClick={()=>console.log('edit')}><SettingFilled /> 編輯</button><br />
          <table className="nftState">
            <tr>
              <td>{user.on}</td>
              <td>{user.wait}</td>
              <td>{user.myNFT}</td>
            </tr>
            <tr>
              <td className="stateword">上架中</td>
              <td className="stateword">待上架</td>
              <td className="stateword">我的NFT</td>
            </tr>
          </table>
          <hr />
          快來新增個人簡介吧！！
        </div>
        <div className="userPost">
          <Menu mode="horizontal">
              <Menu.Item key="/Post">
                貼文
              </Menu.Item>
              <Menu.Item key="/On">
                上架中
              </Menu.Item>
              <Menu.Item key="/Wait">
                待上架
              </Menu.Item>
              <Menu.Item key="/MyNFT">
                我的NFT
              </Menu.Item>
          </Menu>
        </div>
    </div>
  );
};
export default User;
