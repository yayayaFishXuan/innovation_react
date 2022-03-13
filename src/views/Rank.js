import React, { Component } from 'react';
import { Table } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
class Rank extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const columns = [
            {
                title: '排名',
                dataIndex: 'id',
                key: 'id',
                render:(val) => val <4 ?
                (
                    <img src={require('../assets/rank/'+val+'.svg')} width="40px" alt="" />) : <span>{val}</span>,
                align:'center'
            },
            {
                title: '作品',
                dataIndex: 'img',
                key: 'img',
                render: (record) =>
                    // console.log("record的内容",record)
                    <img src={record} width="120px" alt="" />,
                align: 'center'
            },
            {
                title: '名稱',
                dataIndex: 'name',
                key: 'name',
                align: 'center'
            },
            {
                title: '評價',
                dataIndex: 'score',
                key: 'score',
                render: (val) =>
                    <Rate allowHalf disabled defaultValue={val} />,
                align: 'center'
            },
            {
                title: '價格',
                dataIndex: 'price',
                key: 'price',
                align: 'center'
            },
            {
                title: '漲跌',
                dataIndex: 'updown',
                key: 'updown',
                render: (val) => val >= 0 ?
                    <span style={{ color: 'green' }}>{val}</span> : <span style={{ color: 'red' }}>{val}</span>,
                align: 'center'
            },
        ];
        return (
            <div>
                <div style={{flex:1 ,display:'flex',paddingBottom:'15px',fontSize:'15px'}}> 
                    <span style={{flex:0.8}}>
                        排行榜
                    </span>
                    <div style={{flex:0.1}}>
                    <Dropdown overlay={classmenu}  >
                        <a  onClick={e => e.preventDefault()}>
                            類別 <DownOutlined />
                        </a>
                    </Dropdown>
                    </div>
                    <div style={{flex:0.1}}>
                    <Dropdown overlay={menu}  >
                        <a  onClick={e => e.preventDefault()}>
                            期間 <DownOutlined />
                        </a>
                    </Dropdown>
                    </div>
                </div>
                <div>
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </div>
        )
    }
}
const menu = (
    <Menu>
        <Menu.Item>
            <a href="">一個月</a>
            {/* <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com"> */}
        </Menu.Item>
        <Menu.Item>
            <a href="">三個月</a>
            {/* <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com"> */}
        </Menu.Item>
        <Menu.Item>
            <a href="">六個月</a>
            {/* <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com"> */}
        </Menu.Item>
    </Menu>
);
const classmenu = (
    <Menu>
        <Menu.Item>
            <a href="">圖片</a>
            {/* <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com"> */}
        </Menu.Item>
        <Menu.Item>
            <a href="">音樂</a>
            {/* <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com"> */}
        </Menu.Item>
        <Menu.Item>
            <a href="">影片</a>
            {/* <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com"> */}
        </Menu.Item>
    </Menu>
);
const dataSource = [
    {
        id: 1,
        name: 'ooooo',
        score: 5,
        price: 50056.25,
        updown: 925.3,
        img: '/rankZip/1.jpg'
    },
    {
        id: 2,
        name: 'ooooo',
        score: 4.9,
        price: 42650.39,
        updown: -28.3,
        img: '/rankZip/2.jpg'
    },
    {
        id: 3,
        name: 'ooooo',
        score: 4.7,
        price: 38699.57,
        updown: 205.67,
        img: '/rankZip/3.jpg'
    },
    {
        id: 4,
        name: 'ooooo',
        score: 4.5,
        price: 37582.66,
        updown: 112.2,
        img: '/rankZip/4.jpg'
    },
    {
        id: 5,
        name: 'ooooo',
        score: 4,
        price: 35886.12,
        updown: -12.55,
        img: '/rankZip/5.jpg'
    },
    {
        id: 6,
        name: 'ooooo',
        score: 4,
        price: 50056.25,
        updown: 925.3,
        img: '/rankZip/6.jpg'
    },
    {
        id: 7,
        name: 'ooooo',
        score: 4,
        price: 42650.39,
        updown: -28.3,
        img: '/rankZip/7.jpg'
    },
    {
        id: 8,
        name: 'ooooo',
        score: 4,
        price: 38699.57,
        updown: 205.67,
        img: '/rankZip/8.jpg'
    },
    {
        id: 9,
        name: 'ooooo',
        score: 4,
        price: 37582.66,
        updown: 112.2,
        img: '/rankZip/9.jpg'
    },
    {
        id: 10,
        name: 'ooooo',
        score: 4,
        price: 35886.12,
        updown: -12.55,
        img: '/rankZip/10.jpg'
    }
];
export default Rank;