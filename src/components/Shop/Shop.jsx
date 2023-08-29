import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const removeIds = ['c667d3ff-41eb-4cf7-a433-819d959ea768','b357e19b-4dd9-4fc7-b5c0-9ed5255464ba', 'fd52819a-cb78-4510-ad2f-c5bdd888ae78', '1ce97e0e-3611-4406-8788-7b413640f59e','f088beb8-d664-4166-99f8-6995c2f08465', '27cf3efa-7352-4889-85c4-44a4de2aa93a', '1b6f1af1-2103-4838-932d-2b98dfdb6c1f']
    // console.log(products);
    const filteredProducts = products.filter(p => !removeIds.includes(p.id));
    // console.log(products.length,filterdProducts.length);

    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart);

        for(const id in storedCart){
            
            const addedProduct = products.find(product => product.id === id);
            const quantity = storedCart[id];
            addedProduct.quantity = quantity
            console.log(addedProduct);
        }

    }, [products])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    // console.log(cart);

    return (
        
        <div className='shop'>
            <div className="products-container">
                {
                    filteredProducts.map(product => <Product key = {product.id} product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;