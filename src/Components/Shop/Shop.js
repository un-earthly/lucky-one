import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faRefresh, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
export default function Shop() {
  const [det, setDet] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(res => setCardData(res))
  }, [])
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }
  function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
  }
  function setDetOnclick() {
    cart.length === 4 ? setDet(cart[Math.floor(random(1, 5)) - 1])
      : setDet('')
  }
  const erase = () => {
    setCart([])
    setDet([])
  }
  const removeOne = (pd) => {
  }
  return (
    <div className="shop container">
      <div className="laptop">
        {
          cardData.map(data => {
            return <Card
              key={data.id}
              name={data.name}
              id={data.id}
              price={data.price}
              img={data.img}
              handleAddToCart={handleAddToCart}
              product={data}
            />
          })
        }

      </div>
      <div className="cart box px-2 py-4">
        <div className="cart-holder has-text-centered">
          {
            cart.map((pd) => {
              return <Cart
                name={pd.name}
                img={pd.img}
                key={pd.id}
                removeOne={removeOne}
              />
            })
          }
          <small className='is-size-7'>Choose Four Only</small>
          <div className="buttons is-align-items-center is-justify-content-center">
            <button className="button is-dark is-small" onClick={setDetOnclick}>Select one
              <span className="m-2"> <FontAwesomeIcon icon={faWandMagicSparkles} /></span>
            </button>
            <button className="button is-dark is-small" onClick={erase}>Reset
              <span className="m-2"> <FontAwesomeIcon icon={faRefresh} /></span>
            </button>
          </div>
          <p className='is-size-6 is-color-info'>Chosen for you : {det.name} </p>
        </div>
      </div>
    </div>
  )
}
