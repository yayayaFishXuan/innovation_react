import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Logo from "../../assets/Logo.svg";

const { Header } = Layout;
const App = () => {
  return (
    <Header className="header" style={{ zIndex: 1, width: '100%', background: '#fff' }}>
      <Menu mode="horizontal">
        <Menu.Item key="Logo" onClick={() => window.location.assign("http://localhost:3000/")}>{/*先暫時這樣寫，之後改 */}
          <div style={{ display: 'flex' }}>
            <img style={{ marginRight: '10px' }} src={Logo} alt="Logo" />
            <span style={{ fontSize: '22px' }}>INNOVATION</span>
          </div>

        </Menu.Item>
        <Menu.Item key="/Rank">
          <span>排行榜</span>
          <Link to="/Rank"></Link>
        </Menu.Item>
        <Menu.Item key="/Store">
          <span>拍賣市場</span>
          <Link to="/Store"></Link>
        </Menu.Item>
        <Menu.Item key="/Upload">
          <span>上架作品</span>
          <Link to="/Upload"></Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default App;
