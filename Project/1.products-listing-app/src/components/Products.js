import React from 'react';
import Product from './Product';


const Products = ({products}) => {

    const render =(products.map(product => <Product key={product.id} product={product}/>));
    
    return (
        <div className="products">
            {
                render 
            }
        </div>
    );
};

export default Products;