import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nuha from './Components/Nuha';
import Piaus from './Components/Piaus';
import Products from './Components/Products';
import { productData, productData22 } from './Components/Products/data';
import { Global } from './GlobalStyle';


function App() {
  return (
    <Router>
      <Global/>
      <Piaus />
      <Products heading='your favorite' data={productData}/>
      <Nuha />
      <Products heading='others Items' data={productData22}/>
    </Router>
  );
}

export default App;
