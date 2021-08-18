import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="mb-10">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/products" component={Products} />
          <Route path="/product/details" component={ProductDetails} />
        </Switch>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
