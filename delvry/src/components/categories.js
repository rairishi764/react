import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { urlFor } from '../../ClientSanity'
import ClientSanity from '../../ClientSanity'
const Categories = () => {

  const [categories,setCategories] = useState([])

  useEffect(()=> {
    ClientSanity.fetch(
      `*[_type=="category"]`
    ).then((data)=>{
      setCategories(data);
    });
  },[]);

  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    horizontal
    showsHorizontalScrollIndicator = {false}>
      

      {categories.map((category) => (
          <CategoryCard imgUrl={urlFor(category.image).width(200).url()} 
          key={category._id}  
          title={category.name}/>
      ))}
      
      
    </ScrollView>
  )
}

export default Categories