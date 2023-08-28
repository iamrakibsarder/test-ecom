import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price, ratings, quantity, seller, stock} = props.product;
    const handleAddToCart = props.handleAddToCart;
    

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>$ {price}</h4>
                <div className='additional-info'>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings} </p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;