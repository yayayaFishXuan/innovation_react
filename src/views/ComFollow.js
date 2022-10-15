import React, { Component, useContext, useState, useEffect } from "react";
// import { InitContext } from '../index';
// import { Row, Col, Affix, Divider, Avatar, Card } from 'antd';
import "../style/Community.scss";
import moment from "moment";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  HomeFilled,
  HeartFilled,
  CompassFilled,
  MessageFilled,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Divider,
  List,
  Avatar,
  Input,
  Button,
} from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";

const { Search } = Input;

const ComFollow = (props) => {
  const { Content, Sider } = Layout;

  const postData = [
    {
      postId: 1,
      userName: "Annie",
      postTime: moment("2022-06-05 22:57:36"),
      content: "天氣真好",
    },
    {
      postId: 2,
      userName: "Annie",
      postTime: moment("2022-06-05 22:57:36"),
      content: "哈哈哈",
    },
    {
      postId: 3,
      userName: "Marry",
      postTime: moment("2022-06-05 22:57:36"),
      content: "加油",
    },
  ];
  const friend = [
    {
      userId: 1,
      name: "test1",
      img: "/uu/cat1.jpg",
    },
    {
      userId: 2,
      name: "test2",
      img: "/uu/cat2.jpg",
    },
    {
      userId: 3,
      name: "test3",
      img: "/uu/cat3.jpg",
    },
    {
      userId: 4,
      name: "test4",
      img: "/uu/cat4.jpg",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sider
        width={250}
        className="site-layout-background"
        style={{ background: "white", position: "fixed" }}
      >
        <div>
          <Menu
            mode="vertical"
            style={{
              height: "100%",
              borderRight: 0,
            }}
          >
            <Menu.Item key="/Community">
              <HomeFilled style={{ color: "#6087BF", fontSize: "18px" }} />
              <span style={{ fontSize: "15px" }}>首頁</span>
              <Link to="/Community"></Link>
            </Menu.Item>
            <Menu.Item key="/ComFollow">
              <CompassFilled style={{ color: "#6087BF", fontSize: "18px" }} />
              <span style={{ fontSize: "15px" }}>追蹤</span>
              <Link to="/ComFollow"></Link>
            </Menu.Item>
            <Menu.Item key="/ComLove">
              <HeartFilled style={{ color: "#6087BF", fontSize: "18px" }} />
              <span style={{ fontSize: "15px" }}>收藏</span>
              <Link to="/ComLove"></Link>
            </Menu.Item>
            <Menu.Item key="/ComTan">
              <SearchOutlined style={{ color: "#6087BF", fontSize: "18px" }} />
              <span style={{ fontSize: "15px" }}>探索</span>
              <Link to="/ComTan"></Link>
            </Menu.Item>
          </Menu>
        </div>
        <div style={{ background: "white" }}>
          <div style={{ borderTop: "1px solid #B7B2BB" }}></div>
          <span
            style={{ textAlign: "center", display: "block", fontSize: "20px" }}
          >
            朋友
          </span>
          <div>
            <List
              itemLayout="horizontal"
              dataSource={friend}
              split={false}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src={item.img} style={{ marginLeft: "10px" }} />
                    }
                    title={
                      <div style={{ display: "flex", flex: 1 }}>
                        <div style={{ display: "flex", flex: 0.9 }}>
                          {item.name}
                        </div>
                        <span
                          style={{ color: "green", display: "flex", flex: 0.1 }}
                        >
                          ●
                        </span>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </Sider>

      <div style={{ width: "300px" }} />
      <div
        style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            alignItems: "center",
            paddingTop: "20px",
          }}
      >
        <Search
          placeholder="搜尋"
          //   onSearch={this.onSearch}
          style={{ width: 300 }}
        />
        <div style={{ width: "40%" }}>
          {friend.map((followitem, key) => (
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "5%",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => {
                //   this.props.history.push({
                //     pathname: "/User",
                //     search: "?query=" + followitem.userId,
                //     state: { followitem: followitem },
                //   });
                console.log(followitem.userId,"進入個人頁!");
                }}
              >
                <Avatar
                  size={40}
                  src={followitem.img}
                  style={{ marginRight: "18px" }}
                />
                {followitem["name"]}
              </div>

              <Button
                style={{
                  background: "#6087BF",
                  color: "#FFF",
                  borderRadius: "6px",
                }}
              >
                追蹤
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* {loading && <div style={{display: 'flex', justifyContent: 'center' }}><LoadingOutlined style={{ fontSize: '40px' }} /></div>} */}
    </div>
  );
};
export default ComFollow;
