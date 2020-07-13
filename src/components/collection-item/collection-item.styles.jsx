import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'
 
export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
 
  &:hover {
    .image {
      opacity: 0.8;
    }
    .my-button {
      opacity: 0.85;
      display: flex;
      position:absolute;
      top: 255px;
    }
  }
`
 
export const ButtonAddToCart = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`