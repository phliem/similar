import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product }) => (
    <div>
        product: { product.name }
    </div>
);

Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;
