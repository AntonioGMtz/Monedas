import React from 'react';
import { StyleSheet, Text , View } from 'react-native';

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    return (
        <Text>El precio del bitcoin es: {resultado.PRICE}</Text>
    );

}

export default Cotizacion;