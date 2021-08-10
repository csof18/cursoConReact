import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import CardProductos from './components/CartWidget';
//import Item from './components/Item';
import ItemList from './components/ItemList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src="img/logoReact.png" className="App-logo" alt="logo" />
        
        <h1 className="App-titulo">
          Proyecto de react
        </h1>
      </header>
      <body>
      <ItemCount/>
      <CardProductos/>
      <ItemList/>
      {/*<ItemList/>*/}
      </body> 
    </div>
  );
}
export default App;
