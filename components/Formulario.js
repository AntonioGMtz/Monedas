import React,{useState} from 'react';
import {Text , View , StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';;


const [moneda, guardarMoneda] = useState('');
const [criptomoneda, guardarCriptomoneda] = useState('');

const obtenerMoneda = moneda =>{
    guardarMoneda(moneda)
}

const Formulario = () => {
    return(
        <View>
            <Text style={styles.label}>Monedad</Text>

            <Picker
                selectedValue={moneda}
                onValueChange={moneda => obtenerMoneda(moneda)}
            >
                <Picker.Item label="- Seleccione -" value="" />
                <Picker.Item label="Dolar de Estados Unidos" value="USD" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label:{
        textTransform:'uppercase',
        fontSize:22,
        marginVertical:20,
    }
});

export default Formulario;