import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handelAddProduct = (price) => {
        console.log('Product added: ',price);
        const newCart = [...cart,price];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            {/* Start product scetion */}
            <div className='product-container'>
                {
                    products.map((product,index) => <Product handelAddProduct= {handelAddProduct} product={product} key={index}></Product>)
                }
            </div>
            {/* End product section */}

            {/* Start cart section */}
            <div className='cart-container'>
                
                 <Cart cart={cart}></Cart> 
            </div>
            {/* End cart section */} 
        </div>
    );
};

export default Shop;