import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
  ) : (
      <WrappedComponent { ...otherProps }/>
  )
  }
  return Spinner;//functional spinner component 
}

export default WithSpinner;