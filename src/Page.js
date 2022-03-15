import { BrowserRouter, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import RouteApp from './components/App';
import Home from './views/Home';
import Store from './views/Store';
import Upload from './views/Upload';
import Rank from './views/Rank';
import SingleItem from './views/SingleItem';


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
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Page;