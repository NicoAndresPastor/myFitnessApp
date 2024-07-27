import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Progress from 'react-native-progress';

// El componente Load
const Load = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval;
    
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    // Actualiza el progreso cada 100ms
    progressInterval = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress < 1) {
          return oldProgress + 0.01;
        } else {
          clearInterval(progressInterval);
          return oldProgress;
        }
      });
    }, 30); // 30 ms para 3 segundos total

    // Limpia el temporizador y el intervalo de progreso si el componente se desmonta
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../images/FastCal.png')} />
      <Progress.Bar progress={progress} width={200} />
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  image: {
    width: 400,
    height: 400,
  },
});

export default Load;
