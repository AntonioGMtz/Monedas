import React , {useEffect, useState} from 'react';
import {StyleSheet,Image,View, ScrollView} from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';


const App = () => {

    
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado,guardarResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if(consultarAPI){
        //Comillas invertidas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);

        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        guardarConsultarAPI(false);
        
      }
  
    }
    cotizarCriptomoneda();
  }, [consultarAPI]);


  return (
    <>
    <ScrollView>
      <Header/>
      <Image
        style = {styles.imagen}
        source={ require('./assets/img/moneda.png')}
      />

      <View style={styles.contenido}>
      <Formulario
        moneda={moneda}
        criptomoneda={criptomoneda}
        guardarMoneda={guardarMoneda}
        guardarCriptomoneda={guardarCriptomoneda}
        guardarConsultarAPI={guardarConsultarAPI}
      />

      </View>

      
      <Cotizacion
        resultado={resultado}
      />
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  imagen:{
    width: '100%',
    height: 300,
    marginHorizontal : '2.5%'
  },
  contenido:{
    marginHorizontal: '4.5%'

  }
 
});

export default App;


