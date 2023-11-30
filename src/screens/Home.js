import { SafeAreaView, TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.searchBar}>
          <MaterialIcons name='magnify' size={20} color={'#666'} style={styles.iconInput} />
          <TextInput
            style={styles.inputSearchBar}
            placeholder="Senha"
            placeholderTextColor='#ccc'
            keyboardType="default"
          />
        </View>
        <View>
          <MaterialIcons name='cart' size={20} color={'#eee'} style={styles.cart} />
        </View>
      </View>


      <View style={styles.carrouselHome}>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    marginTop: 45,
  },

  header: {
    backgroundColor: '#2E9E83',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBar: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 30,
    marginLeft: 8,
    borderRadius: 5,
    paddingHorizontal: 20,
  },

  inputSearchBar: {
    paddingLeft: 15,
  },

  cart: {
    paddingLeft: 20,
  },

  carrouselHome: {
    backgroundColor: 'orange',
    width: '100%',
    height: 220,
  },
})