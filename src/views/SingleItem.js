import React, { Component } from 'react';
import '../style/SingleItem.scss';
import { Button, Rate, notification } from 'antd';
import TurnoverRateLine from '../components/Chart/PriceInformation'
class SingleItem extends Component {
    constructor(props) {
        // console.log(props.location.state);
        super(props)
        this.state = {
            single: [],
            market: this.props.location.state.market,
            folder: '',
            describe: `Quisque vitae magna at urna rhoncus placerat.
                Quisque a varius arcu. Etiam condimentum, elit
                sit amet tincidunt auctor, ex lorem
                condimentum elit, vel gravida purus felis et
                odio. Duis mauris lacus, tristique ut ante et,
                tincidunt eleifend libero. Nulla auctor nisl ut
                justo vehicula, vitae vulputate mauris convallis.`,
            TokenId: '',
            name: '名稱',
            trendUrl: '/img/chart.png',
            who: '0X16Dd...6b228',
            price: 18,
            test: '/img/store/m1.jpg'
        }
    }

    render() {
        notification.destroy();
        const { TokenId, describe, trendUrl, market } = this.state
        return (
            <div>
                <div className="SingleItem">
                    <div className="ItemBox">
                        <div className="container">
                            <img src={market.img} style={{ width: '70%', marginLeft: '15%' }} />
                            
                            <div className="middle">
                                <div className="text">{describe}</div>
                            </div>
                        </div>
                    </div>
                    <div className="ItemBox" style={{ textAlign: 'left' }}>
                        <font size="5">
                            <b>
                                {market.name}
                            </b>
                        </font>
                        <br />
                        <TurnoverRateLine  />
                        <br />
                        <font>請為這個作品評分：</font><Rate />
                        <br />
                        <font color="#427fdb">持有者：</font>
                        {market.author}
                        <br />
                        <font color="#427fdb">Token Id：</font>
                        #{market.id}
                        <br />
                        <font color="#427fdb">價格：</font>
                        {market.price}ETH
                        <br />
                        <Button>
                            購買
                        </Button>
                        <Button>
                            競標
                        </Button>
                    </div>
                </div >
            </div >
        )
    }
}
export default SingleItem;
