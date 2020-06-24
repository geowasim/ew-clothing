import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { cartItemsSelector, cartTotalSelector, cartItemsCountSelector } from '../../redux/cart/cart.selector';

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const CheckoutPage = ({cartItems, total, itemCount}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )
    }
    <div className='total'>
      <div className='totalItems'>
        <span>TOTAL ITEMS: {itemCount}</span>
      </div>
      <div className='totalPrice'>
        <span>TOTAL PRICE: ${total}</span>
      </div>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartTotalSelector,
  itemCount : cartItemsCountSelector
})

export default connect(mapStateToProps)(CheckoutPage)

