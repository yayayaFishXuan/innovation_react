import React, { useEffect, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Logo from "../../assets/Logo.svg";
import { InitContext } from '../../index';

const Header = () => {
  const contextData = useContext(InitContext); //取得數據
  let history = useHistory(); //取得history
  const location = useLocation();
  const ethereum = window.ethereum

  const init = () => {
    if (contextData.isinstall === true) {
      login()
    }
  }


  async function login() {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts'
    })
    const account = accounts[0]
    contextData.setAddress(account)
  }


  function InstallMetaMask() {
    //有條件式的話好像要用useEffect包起來 不然會出錯
    useEffect(() => {
      if (typeof ethereum !== 'undefined' && ethereum.isMetaMask) {
        contextData.setIsinstall(true);
        // init()
      } else {
        contextData.setIsinstall(false);
      }
    }, [contextData])
  }


  const { Header } = Layout;
  InstallMetaMask()
  init()


  useEffect(() => {
    if (

      contextData.address === null ||
      contextData.address === 'undefined' ||
      contextData.address === ''
    ) {
      if (history.location.pathname !== '/')
        history.push('/');
      // window.location.assign("http://localhost:3000/")    
    }
  }, [location])

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

  )
}
export default Header;