import React from 'react';  
import { Form, Input, Button } from 'antd';  

const ResearchForm = () => {  
  const onFinish = (values) => {  
    console.log('Received values:', values);  
  };  

  return (  
    <Form layout="vertical" onFinish={onFinish}>  
      <Form.Item  
        label="Research Query"  
        name="query"  
        rules={[{ required: true, message: 'Please input your research query!' }]}  
      >  
        <Input placeholder="Enter your research question" />  
      </Form.Item>  

      <Form.Item>  
        <Button type="primary" htmlType="submit">  
          Start Research  
        </Button>  
      </Form.Item>  
    </Form>  
  );  
};  

export default ResearchForm;
