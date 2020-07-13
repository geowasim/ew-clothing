import React from 'react';
import Directory from '../../components/directory/direcotry.component'
import './homepage.styles.scss';
import { HomepageContainer } from './homepage.styles';

const HomePage = () => (
  <HomepageContainer>
    <h1>HomePage</h1>
    <Directory />
  </HomepageContainer>
);


export default HomePage