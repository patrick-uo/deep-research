// src/App.js  
import { BrowserRouter } from 'react-router-dom';  

function App() {  
  return (  
    <BrowserRouter basename={process.env.PUBLIC_URL}>  
      {/* 应用内容 */}  
    </BrowserRouter>  
  );  
}  
