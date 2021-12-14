import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

export const ResultsScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`); 
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id)
    }, []);

    if(!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList data={result.photos} keyExtractor={(photo) => photo} renderItem={({item}) => {
                return (
                    <Image source={{uri : item}} style={{height : 200, width : 300}} />
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({

})

