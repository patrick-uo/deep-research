import React from 'react';  
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // 注意这里使用 HashRouter  
import Header from './components/Header';  
import Sidebar from './components/Sidebar';  
import Home from './pages/Home';  
import ResearchResults from './pages/ResearchResults';  
import { Layout } from 'antd';  

const { Content } = Layout;  

function App() {  
  return (  
    <Router basename={process.env.PUBLIC_URL}>  
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
