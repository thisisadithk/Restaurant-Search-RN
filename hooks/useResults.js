import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params : {
                    limit : 50,
                    term : searchTerm,
                    location : 'new york'
                }
            });
            setResults(response.data.businesses);
        }
        catch(e){
            alert(e.message);
        }
    } 
     
    useEffect(() => {
        searchApi("ice cream");
    }, [])
     
    return [searchApi, results, error];
}