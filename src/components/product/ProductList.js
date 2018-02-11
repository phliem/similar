import React from 'react';
import PropTypes from 'prop-types';

// Local files
import Product from './Product';

const ProductList = ({ products }) => (
    <div>
        <h1>My Product list</h1>
        { products &&
            <div>
                {
                    products.map(product => <Product product={product} />)
                }
            </div>
        }
    </div>
);

ProductList.propTypes = {
    products: PropTypes.object.isRequired
};

export default ProductList;
