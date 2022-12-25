import React from 'react';

const Product = ({product}) => {
  const {title, price,image, description,rating} = product;
  console.log(product);
  return (
      <article className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>Price: ${price}</p>
        
        <p>Rating: {rating.rate}</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
