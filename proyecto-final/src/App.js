import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar/>
        <ItemListContainer greeting='Proyecto React con componente de estado'/>
        <img src="img/logoReact.png" className="App-logo" alt="logo" />
        
        
        
      </header>
    </div>
  );
}

export default App;
