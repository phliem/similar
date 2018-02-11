import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Local files
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import ProductList from './components/product/ProductListContainer';

const App = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/products">Product list</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/products" component={ProductList} />
        </div>
    </BrowserRouter>
);

export default App;
