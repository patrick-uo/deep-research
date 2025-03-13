import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Header from './components/Header';  
import Sidebar from './components/Sidebar';  
import Home from './pages/Home';  
import ResearchResults from './pages/ResearchResults';  
import { Layout } from 'antd';  

const { Content } = Layout;  

function App() {  
  return (  
    <Router>  
      <Layout>  
        <Header />  
        <Layout>  
          <Sidebar />  
          <Content style={{ padding: '24px' }}>  
            <Switch>  
              <Route path="/" exact component={Home} />  
              <Route path="/results" component={ResearchResults} />  
            </Switch>  
          </Content>  
        </Layout>  
      </Layout>  
    </Router>  
  );  
}  

export default App;
