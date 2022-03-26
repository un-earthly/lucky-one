import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Cart from '../Cart/Cart';

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
    cart.length <= 4 ? setDet(cart[Math.floor(random(1, 5)) - 1])
      : setDet('please choose somthing ')
  }
  const erase = () => {
    setCart([])
    setDet([])
  }
  console.log(det.name)
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
      <div className="cart">
        <div className="cartHolder">
          {
            cart.map((pd) => {
              return <Cart
                name={pd.name}
                img={pd.img}
                key={pd.id}
              />
            })
          }

          <div className="buttons">
            <button className="button is-info" onClick={setDetOnclick}>Choose For Me</button>
            <button className="button is-info" onClick={erase}>Choose Again</button>
          </div>
          <p className='is-size-4 is-color-info'>Chosen for you : {det.name}</p>
        </div>
      </div>
    </div>
  )
}
