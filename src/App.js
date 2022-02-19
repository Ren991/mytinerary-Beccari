
import './App.css';
import BarButtons from './components/BarButtons';
import Carrousel from './components/carrousel';
import Hero from './components/hero'
import CallToAction from './components/CallAction'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="App">
    <BarButtons/> 
    <Hero/>
    
    <CallToAction/>
    <Carrousel/>
    <Footer/>
    

    
    </div>
  );
}

export default App;
