
import './App.css';
import employee from './employee';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import home from './pages/home';
import aboutus from './pages/aboutus';
import contactus from './pages/contactus';
function App() {
  return (
    <div>
      <BrowserRouter>
<Routes>
  <route path="/" element={<home/>}></route>
  <route path="/" element={<aboutus/>}></route>
  <route path="/" element={<contactus/>}></route>
  <route path="/" element={<contactus/>}></route>
  <route path="/counterfunction" element={<counterfunction/>}></route>
  
</Routes>

      </BrowserRouter>
      <h1>hello im react</h1>
      <employee/>
    </div>
    
  );
}

export default App;
