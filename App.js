
import React from 'react';


import {
  
  StyleSheet,
  Image
} from 'react-native';

import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header/>
      <Image
        style = {styles.imagen}
        source={ require('./assets/img/moneda.png')}
        />
    </>
  );
};


const styles = StyleSheet.create({
 
});

export default App;


