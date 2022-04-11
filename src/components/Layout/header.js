import React, { useEffect, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Logo from "../../assets/Logo.svg";
import { InitContext } from '../../index';
import '../../style/Metamask.scss'
import mm from '../../assets/metamask-browser.svg';
import { StarFilled,UserOutlined,ShoppingFilled } from '@ant-design/icons';



const Header = () => {
  const contextData = useContext(InitContext); //取得數據
  let history = useHistory(); //取得history
  const location = useLocation();
  const ethereum = window.ethereum

  function init() {
    console.log(sessionStorage.getItem('tk'));
    contextData.setTipShow(sessionStorage.getItem('tk'))
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
    sessionStorage.setItem('user',account)
  }


  function InstallMetaMask() {
    //有條件式的話好像要用useEffect包起來 不然會出錯
    useEffect(() => {
      if (typeof ethereum !== 'undefined' && ethereum.isMetaMask) {
        contextData.setIsinstall(true);
        sessionStorage.setItem('tk', 'none')
      } else {
        contextData.setIsinstall(false);
        sessionStorage.setItem('tk', true)
      }
    }, [contextData])
  }


  const { Header } = Layout;
  InstallMetaMask()
  init()


  useEffect(() => {
    if (
      sessionStorage.getItem('user') === null ||
      sessionStorage.getItem('user') === 'undefined' ||
      sessionStorage.getItem('user') === ''
    ) {
      if (history.location.pathname !== '/'){
        history.push('/');
        if(contextData.isinstall === false){
          sessionStorage.setItem('tk', true)
          contextData.setTipShow(true);
          history.push('/');
        }
      }
      // window.location.assign("http://localhost:3000/")    
    }

  }, [location,contextData])

  return (
    <React.Fragment>
    <Header className="header" style={{ zIndex: 1,background:'#fff',width: '100%',display: 'flex',boxShadow: '0px 3px #3434345a',position:'fixed'}}>
          <div style={{cursor: 'pointer'}} className="logo"  onClick={() => window.location.assign("http://localhost:3000/")}>
            <img style={{ marginRight: '10px' }} src={Logo} alt="Logo" />
            <span style={{ fontSize: '22px' }}>INNOVATION</span>
          </div>
      <Menu mode="horizontal"   style={{justifyContent: 'flex-end' ,width: '87%'}}>
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
        <Menu.Item key="/Cart">
          <ShoppingFilled style={{ fontSize: '22px' }}/>
          <Link to="/Cart"></Link>
        </Menu.Item>
        {/* <Menu.Item key="/Community">
          <span>社群</span>
          <Link to="/Community"></Link>
        </Menu.Item>
        <Menu.Item key="/Cart">
          <StarFilled style={{fontSize:'25px'}} />          
        <Link to="/Cart"></Link>
        </Menu.Item>
        <Menu.Item key="/User">
          <UserOutlined style={{fontSize:'25px'}} />         
        <Link to="/User"></Link>
        </Menu.Item> */}
      </Menu>
    </Header>
      <div className="installtip" style={{display:contextData.tipShow}}>
        <div className="box">
          <div>
            <div
              style={{flex:0.9,display:'flex',flexDirection: 'column',alignItems: 'flex-start'}}
            >
              <h2>您要開始使用INNOVATION?</h2>
              <span style={{color:'gray'}}
                >您將需要一個安全的地方來儲存您的帳戶資訊!</span
              >
            </div>
            <button style={{flex:0.1,fontSize:'1.5em',color:'white',backgroundColor:'DeepSkyBlue',borderRadius:'5px',borderColor:'DeepSkyBlue'}} onClick={()=>{window.location.reload()}}>
              <span>完成</span>
            </button>
          </div>
          <div >
            <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
            <img src={mm} style={{width: '30%'}}/>
            </div>
              <h2 style={{flex:1}}>
                像MetaMask這樣的安全錢包即是完美之地。同時您也可以通過錢包進入INNOVATION（無需另設密碼）。
              </h2>
            <div style={{display: 'flex',justifyContent: 'center', alignItems:'center' }}>
              <button style={{fontSize:'1.5em',color:'white',backgroundColor:'DeepSkyBlue',borderRadius:'5px',borderColor:'DeepSkyBlue',margin:'2%'}}
                ><a style={{color:'white'}}
                  href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=zh-TW"
                  target="_blank"
                  >從Chrome應用商店獲取</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
  )
}
export default Header;