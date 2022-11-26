import React from 'react';
import './Product.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Star from '../Star/Star';

const Product = (props) => {
    const {name, img, seller, price, stock, star} = props.product;
    
    return (
        <div className='product'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='product-part'>
                <h4 className='product-name'>{name}</h4>
                <br />
                <div className='product-body'>
                    <div className='left-part'>
                        <p>by: {seller}</p>
                        <p>${price}</p>
                        <p>Only {stock}</p>
                        <button 
                        className='main-btn'
                        onClick={()=>props.handelAddProduct(props.product)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                        </button>
                    </div>
                    <div className='right-part'>
                        <div className='star'>
                            <Star str={star} ></Star>
                        </div>
                        
                    </div>
                </div>
               
                
            </div>
        </div>
    );
};

export default Product;