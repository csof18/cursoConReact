import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Logo from './components/Logo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
export default function App() {
  return (
    <>
      <body className="App">
        <BrowserRouter className="App-header">
        <NavBar/>
        <Logo/>
        <h1 className='App-titulo'>Productos</h1>
        <Switch className="colorDeFondo">
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:titulo/:id">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </BrowserRouter>
      
      </body> 
    </>
  );
}
