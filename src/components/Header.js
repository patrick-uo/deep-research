import React from 'react';  
import { Layout } from 'antd';  

const { Header } = Layout;  

const CustomHeader = () => {  
  return (  
    <Header style={{ background: '#fff', padding: '0 20px' }}>  
      <h1>Deep Research</h1>  
    </Header>  
  );  
};  

export default CustomHeader;
