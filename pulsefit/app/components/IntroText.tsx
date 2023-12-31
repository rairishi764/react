import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import colors from '../styles/colors';

export const IntroText = () => {
  return (
    <View style={styles.content}>
      
  
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  paragraph: {
    marginVertical: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  link: {
    color: colors.purple,
    fontWeight: 'bold',
  },
});
