import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price,cartItems }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GzevPAfmJsbBzW3v86FCtliGmHSMSTmXRcOUBgFyp0XnuXEmrdzlqK5Qu45nSVsWYp4AOfzYI3fpFNKaav9kfqE00YYAoMT5y' 

  const onToken = token => {
    alert('Payment Successful')    
  }


  return (
    <div>
    <StripeCheckout 
      label='Pay Now'
      name='Charwa for clothing,E-clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      />
    </div>
  )
}


export default StripeCheckoutButton
