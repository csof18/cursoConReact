import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContext } from './context/CartContext';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import CategoryContainer from './components/CategoryContainer';
import { datosProducto } from './components/datosProducto';
export default function App() {
  const [contextProducto, setContextProducto] = useState(false)

    return (
    <>
      <body className="App colorDeFondo">
        <BrowserRouter className="App-header">
          <NavBar/>
          <Switch className="colorDeFondo">
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/category/:nombre">
              <CategoryContainer/>
            </Route>
            
            <Route exact path="/item">
              <ItemListContainer/>
            </Route>
              <CartContext.Provider value={{contextProducto, setContextProducto}}>
            <Route exact path="/item/:id">
                <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
              </CartContext.Provider>
          </Switch>
        </BrowserRouter>
      </body> 
    </>
  );
}
