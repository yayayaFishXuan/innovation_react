import React, { Component } from 'react';
import '../style/store.scss';
import { HeartFilled,HeartOutlined } from '@ant-design/icons';
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
                    img: '/storeZip/1.jpg',
                    good:false

                },
                {
                    id: '2',
                    name: '測試用作品2',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/2.jpg',
                    good:false
                },
                {
                    id: '3',
                    name: '測試用作品3',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/3.jpg',
                    good:false
                },
                {
                    id: '4',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/4.jpg',
                    good:false
                },
                {
                    id: '5',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/5.jpg',
                    good:false
                },
                {
                    id: '6',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/6.jpg',
                    good:false
                },
                {
                    id: '7',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/7.jpg',
                    good:false
                },
                {
                    id: '8',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/8.jpg',
                    good:false
                },
                {
                    id: '9',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/9.jpg',
                    good:false
                },
                {
                    id: '10',
                    name: '測試用作品',
                    author: '作者xxx',
                    price: '545.77',
                    img: '/storeZip/10.jpg',
                    good:false
                }
            ],
            
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
                            <img src={market.img} alt="" onClick={() => { this.props.history.push({ pathname: "/SingleItem", search: '?query=' + market.id, state: { market: market } }) }} />
                            <div style={{ textAlign: 'left', fontSize: '18px', lineHeight: '2' }} >
                                {market.name}
                                {
                                    market.good ? 
                                        <HeartFilled
                                        style={{ float: 'right', paddingTop: '8px',color:'red' }}
                                        onClick={()=>{
                                          
                                            this.setState({
                                            markets: markets.map((d,k) => {
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
                                        markets: markets.map((d,k) => {
                                        return d.id === String(key+1)
                                            ? {...d, good: !d.good}
                                            : {...d};
                                        })
                                    })}}
                                    />
                                
                                }
                                {/* <HeartFilled
                                    style={{ float: 'right', paddingTop: '8px' }}
                                    onClick={(e) => { e.target.style.color === 'red' ? e.target.style.color = 'black' : e.target.style.color = 'red' }} /> */}
                            </div>
                            <div style={{ textAlign: 'left', fontSize: '14px' }}>
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