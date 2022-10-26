import React, { Component } from "react";
import { Menu, notification, Avatar, Modal, Form, Input, Upload } from 'antd';
import "../style/User.scss";
import { SettingFilled } from "@ant-design/icons";
import userImg from '../assets/uu/ch1.jpg';
import Userpage from '../components/User/userpage';

class User extends Component {
  constructor(props) {
      super(props)
      this.state = { 
        user: {
          'name': 'Lulu',
          'userImg': '',
          'bgImg':require('../assets/user/PIC.png'),
          'on':3,
          'wait':0,
          'myNFT':3,
          'introduction':'哈囉~',
        },
        userpage: '',
        edit: false,
      }
  }

  menuClick = (userpage)=>{
    this.setState({userpage:userpage});
  };

  render() {
      const { user, userpage, edit } = this.state;
      const { TextArea } = Input;
      const handleOk = e => {
        e.preventDefault();
        this.setState({edit:false})
      };
      const handleCancel = () => {
        this.setState({edit:false})
      };
      notification.destroy();
      return (
        <div className="user">
          <Modal
            title="編輯個人資料"
            visible={edit}
            okText="更改"
            cancelText="取消"
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form name="editForm" labelAlign='left' labelCol={{span:4}}>
              <Form.Item label="名稱" name="name" initialValue={user.name} rules={[{required: true, message: "請輸入名稱"}]}>
                <Input />
              </Form.Item>
              <Form.Item label="個人簡介" name="introduction" initialValue={user.introduction}>
                <TextArea
                  maxLength={100}
                  showCount
                  autoSize
                  allowClear
                  style={{ 'resize': 'none' }}
                />
              </Form.Item>
              <Form.Item label="頭像" name="userImg">
                <input type="file" />
              </Form.Item>
              <Form.Item label="背景圖片" name="bgImg">
                <input type="file" />
              </Form.Item>
            </Form>
          </Modal>

          <div className="userBg">
            <img className="bgImg" src={user.bgImg} alt="" />
          </div>

          <div className="userInfo">
            <Avatar className="userImg" size={80} src={userImg} />
            <br />
            {user.name}<br />
            <button className="edit" onClick={()=>(this.setState({edit:true}))}><SettingFilled /> 編輯</button><br />
            <table className="nftState"><tbody>
              <tr>
                <td>{user.on}</td>
                <td>{user.wait}</td>
                <td>{user.myNFT}</td>
              </tr>
              <tr>
                <td className="stateword" onClick={()=>this.menuClick('on')}>上架中</td>
                <td className="stateword" onClick={()=>this.menuClick('wait')}>待上架</td>
                <td className="stateword" onClick={()=>this.menuClick('myNFT')}>我的NFT</td>
              </tr>
            </tbody></table>
            <hr />
            {user.introduction !== '' ? user.introduction : '快來新增個人簡介吧！！'}
          </div>

          <div className="userPost">
            <Menu mode="horizontal" defaultSelectedKeys={['post']}>
                <Menu.Item key="Post" onClick={()=>this.menuClick('post')}>
                  貼文
                </Menu.Item>
                <Menu.Item key="On" onClick={()=>this.menuClick('on')}>
                  上架中
                </Menu.Item>
                <Menu.Item key="Wait" onClick={()=>this.menuClick('wait')}>
                  待上架
                </Menu.Item>
                <Menu.Item key="MyNFT" onClick={()=>this.menuClick("myNFT")}>
                  我的NFT
                </Menu.Item>
            </Menu>
            <div className="userPage">
              <Userpage userpage={userpage} />
            </div>
          </div>
        </div>
      )
  }
}

export default User;
