import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../../features/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems } from '../../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/outline'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
      const groupItems = items.reduce((results, item)=>{
        (results[items.id] = results[items.id] || []).push(item)
        return results
      },{})
      setGroupedItemsInBasket(groupItems)
    },[items])
    console.log(groupedItemsInBasket)
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
              </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5">
              <XCircleIcon color="#00CCBB" height={50} width={50}/>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image source = {{
          uri:"https://links.papareact.com/wru",
          className:"h-7 w-7 bg-gray-300 p-4 rounded-full"
        }}/>
        <Text className="flex-1">Deliver in 50-70 min</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
          <View key={key}>
            <Text>{items.length} x</Text>
            <Text className="flex-1">{items[0]?.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default BasketScreen