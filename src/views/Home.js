import React, { Component } from 'react';
import { DownOutlined } from '@ant-design/icons'
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';

import { Button } from 'antd';
import '../style/Home.scss';
import wow from '../assets/home/wow.svg';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: [{
                img_src: require('../assets/home/art1.jpg'),
                text_title: '獨一無二的價值',
                text_con:
                    '由於NFT具有不可替代性、不可分割性、及獨一無二等特性,因此適合作為一種權益證明。你所有的作品都是獨一無二的,不必擔心有盜版的問題!'
            },
            {
                img_src: require('../assets/home/shop.jpg'),
                text_title: '拍賣市場',
                text_con:
                    '在這裡你可以自由地發饰自己的作品進行交易,也可以瀏覽他人的作品進行定價或競價買賣。'
            },
            {
                img_src: require('../assets/home/online.jpg'),
                text_title: '社群',
                text_con:
                    '在這裡你可以認識志同道合的使用者以進行交流,也可發佈貼文來宣傳作品或是抒發心情。'
            },
            {
                img_src: wow,
                text_title: '收集紀念幣',
                text_con:
                    '除了拍賣市場及社群外,INNOVATION還設計了許多各個樣式的紀念幣,等著你去收集呢!'
            }]
        }
    }

    scrollToAnchor = (screens) => {
        // 找到錨點
        let anchorElement = document.getElementById(screens);
        // 如果對應id的錨點存在，就跳轉到錨點
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }

    }
    render() {
        return (
            <div className='home'>
                <div className="tit">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>你想過自己的作品不僅能被看見且還可以賺錢嗎</h2>
                        <h2>那就快來 INNOVATION</h2>
                        <h2>往下看更多資訊</h2>
                    </div>
                    <Button type="primary" size="large">
                        <Link to="/Store">開始</Link>
                    </Button>

                    <div className="down" id="homecontain" onClick={() => this.scrollToAnchor('screens')}>
                        <DownOutlined style={{ fontSize: '36px' }} />
                        <DownOutlined style={{ fontSize: '36px' }} />
                        <DownOutlined style={{ fontSize: '36px' }} />
                    </div>
                </div >

                <div className="contain">
                    <div id="screens"></div>
                    <h2>
                        INNOVATION是個<span style={{ margin: '0 3px', color: '#409EFF' }}>
                            NFT交易平台</span
                        >,而「INNOVATION」代表革新,表示個平台的藝術交易將與以往不同,有著全新的交易形式,透過
                        INNOVATION
                        ,藝術創作者不但能夠自由地發佈自己的作品進行交易,還能透過社群與他人互相交流,藉此取相關收益並提升知名度,大眾也可透過轉售提升作品的價值,賺取中間利潤。
                    </h2>

                    {this.state.datas.map((data, key) => (
                        <div className="image-text" key={key} >
                            <div className="image" >
                                <img src={data.img_src}  />
                            </div>
                            <div className="text">
                                <h2>{data.text_title}</h2>
                                <h3>{data.text_con}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        )
    }
}
export default Home;
