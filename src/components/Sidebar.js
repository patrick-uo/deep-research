import React from 'react';  
import { Menu } from 'antd';  
import { Link } from 'react-router-dom';  

const Sidebar = () => {  
  return (  
    <Menu  
      style={{ width: 256 }}  
      mode="inline"  
      defaultSelectedKeys={['1']}  
    >  
      <Menu.Item key="1">  
        <Link to="/">Home</Link>  
      </Menu.Item>  
      <Menu.Item key="2">  
        <Link to="/results">Research Results</Link>  
      </Menu.Item>  
    </Menu>  
  );  
};  

export default Sidebar;
