import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.carrouselHome}>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
  },

  carrouselHome: {
    backgroundColor: 'orange',
    width: '100%',
    height: 220,
  },
})