import './product-card.styles.scss';

import Button from '../button/button.componet';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
const ProductCard = ({ product }) => {

    
    function addProductToCart(){
        addItemToCart(product)
    }

    const{addItemToCart} = useContext(CartContext)
    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick ={()=> addProductToCart(product)}>Add to Cart</Button>
        </div>
    );
    };

export default ProductCard;