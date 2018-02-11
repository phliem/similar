import React, { Component } from 'react';
import axios from 'axios';

// Local files
import ProductList from './ProductList';

class ProductListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: null
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.setState({
                    products: res.data
                });
            });
    }

    render() {
        return (
            <ProductList products={this.state.products} />
        );
    }
}

export default ProductListContainer;
