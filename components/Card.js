import {Image, View, Text, StyleSheet} from 'react-native'

export default function Card({image, id, selected}) {

  return (
    <View>
        <Image style={[style.card, selected && style.selected]} source={{uri: image}}/>
        <Text style={style.name}>{id}</Text>
     </View>
  )
}

const style = StyleSheet.create({
  card: {
    width: 205,
    height: 300,
    marginHorizontal: 10
  },
  name: {
    textAlign: 'center',
    fontSize: 24,
  }, 
  selected: {
    borderWidth: 3,
    borderColor: 'red'
  }
})