import React, { Component } from "react";
import { Menu, notification, Avatar, Modal, Form, Input, Button, Upload } from 'antd';
import "../style/User.scss";
import { SettingFilled } from "@ant-design/icons";
import Userpage from '../components/User/userpage';

class User extends Component {
  constructor(props) {
      super(props)
      this.state = { 
        user: {
          'name': 'Lulu',
          'userImg': require('../assets/uu/ch1.jpg'),
          'bgImg':require('../assets/user/PIC.png'),
          'on':3,
          'wait':0,
          'myNFT':3,
          'introduction':'哈囉~',
        },
        userpage: '',
        edit: false,
        newUserImg: require('../assets/uu/ch1.jpg'),
        newBgImg: require('../assets/user/PIC.png'),
      }
  }

  menuClick = (userpage)=>{
    this.setState({userpage:userpage});
  };
  onSelectImgFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener('load', () =>
            this.setState({ newUserImg: reader.result })
        );
        reader.readAsDataURL(e.target.files[0]);
    }
  };
  onSelectBgFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener('load', () =>
            this.setState({ newBgImg: reader.result })
        );
        reader.readAsDataURL(e.target.files[0]);
    }
  };

  render() {
      const { user, userpage, edit, newUserImg, newBgImg } = this.state;
      const { TextArea } = Input;
      const handleOk = e => {
        this.setState({
          user: {
            ...user,
            ...e,
            userImg: newUserImg,
            bgImg: newBgImg,
          },
          edit:false
        });
      };
      const handleCancel = () => {
        this.setState({edit:false});
      };
      notification.destroy();

      return (
        <div className="user">
          <Modal
            title="編輯個人檔案"
            visible={edit}
            okText="完成"
            cancelText="取消"
            // onOk={handleOk}
            okButtonProps={{htmlType: 'submit', form: 'editForm'}}
            onCancel={handleCancel}
            style={{top:'20px'}}
          >
            <Form onFinish={handleOk} name="editForm" labelAlign='left' labelCol={{span:4}} >
              <Form.Item label="頭像" value="userImg" className='imgFormItem'>
                <Avatar size={80} src={newUserImg} /><br />
                <input type="file" accept="image/*" onChange={this.onSelectImgFile} />
                {/* <Button className="formEdit" onClick={this.onSelectImgFile}>編輯</Button> */}
              </Form.Item>

              <Form.Item label="背景圖片" value="bgImg" className='imgFormItem'>
                <Avatar shape="square" style={{width:"288px",height:"62.4px"}} src={newBgImg} /><br />
                <input type="file" accept="image/*" onChange={this.onSelectBgFile} />
                {/* <Button className="formEdit" onClick={this.onSelectBgFile}>編輯</Button> */}
              </Form.Item>

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
            </Form>
          </Modal>

          <div className="userBg">
            <img className="bgImg" src={user.bgImg} alt="" />
          </div>

          <div className="userInfo">
            <Avatar className="userImg" size={80} src={user.userImg} />
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
