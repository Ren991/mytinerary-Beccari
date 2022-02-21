
import './App.css';
import BarButtons from './components/BarButtons';
import Home from './components/home'
import Footer from './components/footer'
import Cities from './components/cities'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    
    <div className="App">
    
    <BrowserRouter>
    <BarButtons/>
    <Routes>
    <Route path="/" element={<Home/>}/>  
    <Route path="/cities" element={<Cities/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
     
  );
}

export default App;
