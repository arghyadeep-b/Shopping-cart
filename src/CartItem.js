import React from 'react'
import { useGlobalContext } from './context'
const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, changeAmount } = useGlobalContext();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          onClick={() => removeItem(id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount: (id,1) is used to increase the ammount of item_#id by quantity 1*/}
        <button className='amount-btn' onClick={() => changeAmount(id, 1)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount: (id,-1) is used to decrease the ammount of item_#id by quantity 1*/}
        <button className='amount-btn' onClick={() => changeAmount(id, -1)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default CartItem
