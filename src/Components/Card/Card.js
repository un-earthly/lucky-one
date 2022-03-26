import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function Card(props) {
    const product = props.product;
    const { name, id, img, price } = props.product;
    return (
        <div className="card m-2 p-2">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={img} className="p-3" alt={name}/>
                </figure>
            </div>
            <div className="card-content">
                
                <div className="content">
                    <h5>{name}</h5>
                    <h5>For :${price}</h5>
                    <button onClick={() => props.handleAddToCart(product)} className="button is-primary">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </div>
    )
}
