import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 4,
    margin: 4,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 80,
    width: 96,
    borderRadius: 8,
    marginBottom: 4,
  },
  title: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CategoryCard;
