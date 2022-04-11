import React, { Component } from 'react';
import '../style/Cart.scss';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    toSingl
    render() {
        return (
            <div>
                <div class="cart">
                    <h3 id="cartTitle">
                        收藏區
                    </h3>
                    <div id="cartContent">
                        目前尚無購買的作品！
                        <br />
                        快去<Link to="/Store">拍賣市場</Link>看看有沒有喜歡的作品吧！
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;