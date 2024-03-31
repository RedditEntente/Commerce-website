import './product-card.styles.scss';

import Button1 from '../button/button.componet';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
function ProductCard({ product }) {


    function addProductToCart() {
        addItemToCart(product);
    }

    const { addItemToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button1 buttonType='inverted' onClick={() => addProductToCart(product)}>Add to Cart</Button1>
        </div>
    );
}

export default ProductCard;