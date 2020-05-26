import React ,{useState}from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


export default function CuttomButtonRole({onPress,role}) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{role}</Text>
          <Ionicons name="ios-arrow-forward" size={14} color="#3180fa" />
        </View>
      </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        borderColor:'grey',
        borderRadius:10,
        padding:15,
        backgroundColor:'white',
        flexDirection:'row', 
        justifyContent:'space-between' 
    },
    text:{
        fontSize:14,
        color:'#b9b9b9'
    },
})

