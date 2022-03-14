import React from 'react';
import { Layout } from 'antd';
import Header from './header';
const { Content } = Layout;
const LayoutWithRoute = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;