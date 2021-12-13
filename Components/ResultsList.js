import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { ResultsDetail } from "./ResultsDetail";

export const ResultsList = ({title, results}) => {
    return (
        <View style={{marginBottom : 10, marginTop : 10}}>
            <Text style={styles.title}>{title}</Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={results} keyExtractor={result => result.id} renderItem={({item}) => {return <ResultsDetail result={item}/> }}/>
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

