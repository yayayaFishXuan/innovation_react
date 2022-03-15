import React, { Component } from 'react';
import '../style/store.scss';
import { HeartFilled } from '@ant-design/icons';
class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markets: [
                {
                    id: '1',
                    name: '測試用作品1',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/1.jpg'
                },
                {
                    id: '2',
                    name: '測試用作品2',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/2.jpg'
                },
                {
                    id: '3',
                    name: '測試用作品3',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/3.jpg'
                },
                {
                    id: '4',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/4.jpg'
                },
                {
                    id: '5',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/5.jpg'
                },
                {
                    id: '6',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/6.jpg'
                },
                {
                    id: '7',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/7.jpg'
                },
                {
                    id: '8',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/8.jpg'
                },
                {
                    id: '9',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/9.jpg'
                },
                {
                    id: '10',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/10.jpg'
                }
            ]
        }
    }

    toSingl
    render() {
        console.log(this.props.match)
        const { markets } = this.state
        return (
            <div className='store'>
                {markets.map((market, key) =>
                    <div className='eachItem' >
                        <div className='marketImg' >
                            <img src={market.img} alt="" key={key} onClick={() => { this.props.history.push({ pathname: "/SingleItem", search: '?query=' + market.id, state: { market: market } }) }} />
                            <div style={{ textAlign: 'left', fontSize: '18px', lineHeight: '2' }} key={key}>
                                {market.name}
                                <HeartFilled
                                    style={{ float: 'right', paddingTop: '8px' }}
                                    onClick={(e) => { e.target.style.color === 'red' ? e.target.style.color = 'black' : e.target.style.color = 'red' }} />
                            </div>
                            <div style={{ textAlign: 'left', fontSize: '14px' }} key={key}>
                                {market.author}
                                <br />
                                {Math.round((market.price * 100) / 3000) / 100} ETH
                                <br />
                                ${market.price}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default Store;