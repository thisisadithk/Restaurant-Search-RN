import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { ResultsDetail } from "./ResultsDetail";

export const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={{marginBottom : 10, marginTop : 10}}>
            <Text style={styles.title}>{title}</Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={results} keyExtractor={result => result.id} renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("Results", { id : item.id})}>
                         <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )}
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize : 18, 
        fontWeight : "bold",
        marginLeft : 15,
        marginBottom : 5
    }
})

