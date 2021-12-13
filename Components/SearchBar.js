/*
popular props for textInput component - autoCaptalize, autoCorrect, onEndEditing 
Two things we can use to make network rewuests from react-native application : fetch and axios
Fetch is a built-int function for making network requests. Error handling is a bit weird and requires us to write a lot of wrapper code to make it work 'sensibly'.
Axios is a separate library for making requests. Easy to use, sensible defaults but increases our app size(very very slightly)
*/




import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';

export const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput autoCapitalize="none" autoCorrect={false} value={term} onChangeText={onTermChange} style={styles.inputStyle} placeholder="Search" onEndEditing={() => onTermSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle : {
        marginTop : 15,
        backgroundColor : 'lightgrey',
        height : 40,
        borderRadius : 10,
        marginHorizontal : 15,
        flexDirection : "row",
        marginBottom : 10
    },
    inputStyle : {
        flex : 1,
        fontSize : 18
    },
    iconStyle : {
        fontSize : 30,
        alignSelf : 'center',
        marginHorizontal : 15
    }
})