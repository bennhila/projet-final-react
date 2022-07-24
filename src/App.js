import NavBar from './components/NavBar';
import PubBar from './components/PubBar';
import './App.css'
import Produit from './components/Produit';
function App() {
  return (
    <div className='app'>
        <PubBar />
        <NavBar/>
        <Produit/>
 
        
    </div>
  );
}

export default App;
