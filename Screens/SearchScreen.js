import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { SearchBar } from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import { ResultsList } from '../Components/ResultsList';


export const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, error] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }
    
    return (
        <View style={{flex : 1}}> 
            <SearchBar onTermSubmit={searchApi(term)} term={term} onTermChange={setTerm}/>
            {error ? <Text>{error}</Text> : null}
            <Text style={{textAlign : 'center', marginTop : 10, color : "grey"}}>We have found {results.length} results</Text>
            <ScrollView>
            <ResultsList title="Cost Effective" results={filterResultsByPrice("$")} />
            <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
            <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})