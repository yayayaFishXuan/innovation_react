import React, { Component, useState,useEffect } from "react";
import "../style/Cart.scss";
import "../style/store.scss";
import { Link } from "react-router-dom";
import { Modal, Form, Input, Switch, DatePicker,notification } from "antd";
import moment from "moment";

const Cart = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collectionWorks,setCollectionWorks] = useState([{
    id: 1,
    name: "測試用作品1",
    author: "作者xxx",
    intro:"goood",
    tag:"圖片",
    img: "/storeZip/1.jpg",
    price: "545.77",
    saleTime:moment("2003-08-08")
    //   good: false,
  },
  {
    id: 2,
    name: "測試用作品2",
    author: "作者xxx",
    intro:"best",
    tag:"影片",
    img: "/storeZip/2.jpg",
    price: "888",
    saleTime:moment("2003-08-08")
    //   good: false,
  },
  {
    id: 3,
    name: "測試用作品3",
    author: "作者xxx",
    intro:"cute",
    tag:"音樂",
    img: "/storeZip/3.jpg",
    price: "5666",
    saleTime:moment("2003-08-08")
    //   good: false,
  }])
  const [selectWhat,setSelectWhat] = useState(0)
  const showModal = (newData) => {
    setSelectWhat(newData)
    // setNewdata(newData)
    setIsModalOpen(true);
  };

  const handleOk = e => {
    e.preventDefault();
    form.validateFields().then(values => {
      console.log(values);
      addCollectionWork(values)
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();
  useEffect(() => {
    return () => {
      if (isModalOpen) {
        form.resetFields();
      }
    };
  }, [isModalOpen, form]);
  
  const addCollectionWork = Udata =>{
    setCollectionWorks(preUdata=>[
      ...preUdata,
      {
        id:preUdata[preUdata.length-1].id+1,
        name:collectionWorks[selectWhat].name,
        author:collectionWorks[selectWhat].author,
        intro:collectionWorks[selectWhat].intro,
        tag:collectionWorks[selectWhat].tag,
        img:collectionWorks[selectWhat].img,
        ...Udata
      }
    ])
    
    notification.success({
      message: "通知",
      description: "上架成功",
      duration: 2,
      placemen: "topLeft",
    });
  }
  //   console.log(collectionWorks.length);
  console.log(collectionWorks);

  return (
    <div>
      <Modal
        title="上架作品"
        visible={isModalOpen}
        okText="重新上架"
        cancelText="取消"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="todo-form"
          form={form}
          labelCol={{ span: 7 }}
          // wrapperCol={{ spane: 5 }}
          initialValues={{ price: collectionWorks[selectWhat].price,saleTime:moment() }}
        >
          <Form.Item 
            label="作品名稱"
            >
              {collectionWorks[selectWhat].name}
          </Form.Item>
          <Form.Item label="原作者">{collectionWorks[selectWhat].author}</Form.Item>
          <Form.Item label="作品簡介">{collectionWorks[selectWhat].intro}</Form.Item>
          <Form.Item label="作品標籤">{collectionWorks[selectWhat].tag}</Form.Item>
          <Form.Item
            label="作品價格"
            name="price"
            rules={[{ required: true, message: "請輸入作品價格" }]}
          >
            <Input />
          </Form.Item>
           <Form.Item
              label="發佈至社群"
              valuePropName="social"
            >
              <Switch />
            </Form.Item>
          <Form.Item
            label="拍賣市場時間設定"
            name="saleTime"
            rules={[{ required: true, message: "請選擇拍賣日期！" }]}
          >
            <DatePicker format="YYYY-MM-DD" />

          </Form.Item>

          <div>
            作品成交後，平台將會收取成交金額1%作為手續費
          </div>
        </Form>
      </Modal>
      <div class="cart">
        <h3 id="cartTitle">作品收藏區</h3>
        {collectionWorks.length > 0 ? (
          <div className="store">
            {collectionWorks.map((collectionWork, key) => {
              return (
                <div className="eachItem">
                  <div className="marketImg">
                    <img src={collectionWork.img} alt="" onClick={()=>{showModal(key)}} />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div id="cartContent">
            目前尚無購買的作品！
            <br />
            快去<Link to="/Store">拍賣市場</Link>看看有沒有喜歡的作品吧！
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
