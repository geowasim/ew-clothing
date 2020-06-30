const INITIAL_STATE = {
  sections: [
    {
      title: 'HATS',
      imageUrl: 'https://images.unsplash.com/photo-1572460737616-866a25d4d61a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      id: 1,
      linkUrl: 'shop/hats' //'shop/hats'
    },
    {
      title: 'JACKETS',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',   
      id: 2,
      linkUrl: 'shop/jackets'//shop/jackets
    },
    {
      title: 'SNEAKERS',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'//shop/sneakers
    },
    {
      title: 'WOMEN',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/women'//shop/womens
    },
    {
      title: 'MEN',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/men'//shop/mens
    }
  ]   
}



const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


export default directoryReducer