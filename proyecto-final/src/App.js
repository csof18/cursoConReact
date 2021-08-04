import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar/>
        <ItemListContainer greeting='Componente de estado'/>
        <ItemListContainer greeting='hola ' nombre='carla' edad='85'/>
        <ItemListContainer greeting='chao' nombre='mara' edad='40'/>
        <img src="img/logoReact.png" className="App-logo" alt="logo" />
        
        <h1 className="App-titulo">
          Proyecto de react
        </h1>
        
      </header>
    </div>
  );
}

export default App;
