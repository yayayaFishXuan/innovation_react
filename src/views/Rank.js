import React, { Component } from 'react';
import { Table } from 'antd';
import {  Select } from 'antd';
import { Rate } from 'antd';
class Rank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                {
                    id: 1,
                    name: 'ooooo',
                    score: 5,
                    price: 50056.25,
                    updown: 925.3,
                    img: '/rankZip/1.jpg',
                    saledate: '2022-03-12',
                    tag: '圖片'

                },
                {
                    id: 2,
                    name: 'ooooo',
                    score: 4.9,
                    price: 42650.39,
                    updown: -28.3,
                    img: '/rankZip/2.jpg',
                    saledate: '2022-03-10',
                    tag: '圖片'
                },
                {
                    id: 3,
                    name: 'ooooo',
                    score: 4.7,
                    price: 38699.57,
                    updown: 205.67,
                    img: '/rankZip/3.jpg',
                    saledate: '2021-12-07',
                    tag: '音樂'
                },
                {
                    id: 4,
                    name: 'ooooo',
                    score: 4.5,
                    price: 37582.66,
                    updown: 112.2,
                    img: '/rankZip/4.jpg',
                    saledate: '2022-01-08',
                    tag: '音樂'
                },
                {
                    id: 5,
                    name: 'ooooo',
                    score: 4,
                    price: 35886.12,
                    updown: -12.55,
                    img: '/rankZip/5.jpg',
                    saledate: '2022-04-01',
                    tag: '影片'
                },
                {
                    id: 6,
                    name: 'ooooo',
                    score: 4,
                    price: 50056.25,
                    updown: 925.3,
                    img: '/rankZip/6.jpg',
                    saledate: '2021-12-03',
                    tag: '影片'
                },
                {
                    id: 7,
                    name: 'ooooo',
                    score: 4,
                    price: 42650.39,
                    updown: -28.3,
                    img: '/rankZip/7.jpg',
                    saledate: '2021-11-25',
                    tag: '圖片'
                },
                {
                    id: 8,
                    name: 'ooooo',
                    score: 4,
                    price: 38699.57,
                    updown: 205.67,
                    img: '/rankZip/8.jpg',
                    saledate: '2022-02-09',
                    tag: '圖片'
                },
                {
                    id: 9,
                    name: 'ooooo',
                    score: 4,
                    price: 37582.66,
                    updown: 112.2,
                    img: '/rankZip/9.jpg',
                    saledate: '2021-11-18',
                    tag: '音樂'
                },
                {
                    id: 10,
                    name: 'ooooo',
                    score: 4,
                    price: 35886.12,
                    updown: -12.55,
                    img: '/rankZip/10.jpg',
                    saledate: '2022-03-28',
                    tag: '圖片'
                }
            ],
            selectvalue: '全部',
            mm: 'allm'

        }
    }


    handleChange = (value) => {
        this.setState({ selectvalue: value });
    }
    handleChangedate = (value) => {
        this.setState({ mm: value });
    }
    time_difference = (data) => {
        const date = new Date();
        const dataa = new Date(data['saledate'])
        const day = 1000 * 60 * 60 * 24;
        return parseInt(Math.abs((dataa - date) / day))
    }
    GetDisplayed = () => {
        const { dataSource } = this.state;

        if (this.state.selectvalue === '全部') {
            if (this.state.mm === 'allm') {
                return dataSource
            } else if (this.state.mm === '1m') {
                return (dataSource.filter(data => {
                    return this.time_difference(data) <= 31
                }))
            } else if (this.state.mm === '3m') {
                return (dataSource.filter(data => {
                    return this.time_difference(data) <= 93
                }))
            } else if (this.state.mm === '6m') {
                return (dataSource.filter(data => {
                    return this.time_difference(data) <= 186
                }))
            }

        } else {
            if (this.state.mm === 'allm') {
                return dataSource
            } else if (this.state.mm === '1m') {
                return (dataSource.filter(data => {
                    return this.time_difference(data) <= 31 && data['tag'] === this.state.selectvalue
                }))
            } else if (this.state.mm === '3m') {
                return (dataSource.filter(data => {
                    return this.time_difference(data) <= 93 && data['tag'] === this.state.selectvalue
                }))
            } else if (this.state.mm === '6m') {
                return (dataSource.filter(data => {
                    return this.time_difference(data) <= 186 && data['tag'] === this.state.selectvalue
                }))
            }


        }



    };
    render() {
        const displayDatas = this.GetDisplayed();
        const { Option } = Select;
        const columns = [
            {
                title: '排名',
                dataIndex: 'id',
                key: 'id',
                render: (val) => val < 4 ?
                    (
                        <img src={require('../assets/rank/' + val + '.svg')} width="40px" alt="" />) : <span>{val}</span>,
                align: 'center'
            },
            {
                title: '類別',
                dataIndex: 'tag',
                key: 'tag',
                align: 'center'
            },
            {
                title: '作品',
                dataIndex: 'img',
                key: 'img',
                render: (record, text) =>
                    (<a onClick={() => { this.props.history.push({ pathname: "/SingleItem", search: '?query=' + text.id, state: { market: text } }) }} ><img src={record} width="120px" alt="" /></a>),

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
                <div style={{ flex: 1, display: 'flex', paddingBottom: '15px', fontSize: '15px', justifyContent: 'flex-end' }}>

                    <div style={{ flex: 0.1, paddingTop: '15px' }}>

                        <Select placeholder="類別" style={{ width: 80, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}  onChange={this.handleChange}>
                            <Option value="全部">全部</Option>
                            <Option value="圖片">圖片</Option>
                            <Option value="音樂">音樂</Option>
                            <Option value="影片">影片</Option>
                        </Select>
                    </div>
                    <div style={{ flex: 0.1, paddingTop: '15px' }}>

                        <Select placeholder="期間" style={{ width: 85, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}  onChange={this.handleChangedate}>
                            <Option value="allm">全部</Option>
                            <Option value="1m">一個月</Option>
                            <Option value="3m">三個月</Option>
                            <Option value="6m">六個月</Option>
                        </Select>
                    </div>
                </div>
                <div>
                    <Table dataSource={displayDatas} columns={columns} style={{ marginRight: '3%', marginLeft: '3%' }} />
                </div>
            </div>
        )
    }
}




export default Rank;
