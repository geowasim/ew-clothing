import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component {
  constructor(){
      super();

      this.state = {
        sections: [
          {
            title: 'HATS',
            imageUrl: 'https://images.unsplash.com/photo-1572460737616-866a25d4d61a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'JACKETS',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'SNEAKERS',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'WOMEN',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'MEN',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
        ]   
    }
  }
  render(){
    return(
      <div className='directory-menu'>
        {
          this.state.sections.map(({title, imageUrl, id, size})=>(
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))
        } 
      </div>
    )
  }
}

export default Directory;