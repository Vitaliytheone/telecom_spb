import React, { Component } from 'react';
import './App.scss';
import initialProducts from './products.json';
import Product from './components/Product';

const products = initialProducts.map(product => ({
  ...product,
  assocProducts: product.assocProducts.split(';')
}));

class App extends Component {
  render() {
    return (
      <div>
        { products.map((product, index) => <Product key={index} product={product} />)}
      </div>
    );
  }
}

export default App;
