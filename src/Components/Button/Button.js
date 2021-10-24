import React from "react";
import { TouchableOpacity,View,Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Button.style'

function Button({title,onPress,name,color,size}){
   
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon size={size} name={name} color={color}></Icon>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button