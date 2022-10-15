import { BrowserRouter, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import RouteApp from './components/App';
import Home from './views/Home';
import Store from './views/Store';
import Upload from './views/Upload';
import Rank from './views/Rank';
import SingleItem from './views/SingleItem';
import Cart from './views/Cart';
import Community from './views/Community';
import ComMsg from './views/ComMsg';
import ComLove from './views/ComLove';
import ComTan from './views/ComTan';
import ComFollow from './views/ComFollow';


class Page extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <RouteApp exact path="/" component={Home} />
                    <RouteApp path={"/Store"} component={Store} />
                    <RouteApp path={"/Upload"} component={Upload} />
                    <RouteApp path={"/Rank"} component={Rank} />
                    <RouteApp path={"/SingleItem"} component={SingleItem} />
                    <RouteApp path={"/Cart"} component={Cart} />
                    <RouteApp path={"/Community"} component={Community} />
                    <RouteApp path={"/ComMsg"} component={ComMsg} />
                    <RouteApp path={"/ComFollow"} component={ComFollow} />
                    <RouteApp path={"/ComLove"} component={ComLove} />
                    <RouteApp path={"/ComTan"} component={ComTan} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Page;