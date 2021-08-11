import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <body className="App">
        <header className="App-header">
          <NavBar/>
          <img src="img/logoReact.png" className="App-logo" alt="logo" />
          <h1 className="App-titulo">
            Proyecto de react
          </h1>
        </header>
        <section className="colorDeFondo">
          <ItemListContainer/>
        </section>
      </body> 
    </>
  );
}
export default App;
