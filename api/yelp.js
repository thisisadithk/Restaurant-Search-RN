import axios from "axios";

export default axios.create({
    baseURL : "https://api.yelp.com/v3/businesses",
    headers : {
        Authorization : 'Bearer SlqidxWuS0F1hbQj_ELRJHHy61jQj5an2y6pJ8YzyusLH6ZcD9x-hV50QvtA3ew5blx3_00S5rqtrpE7-aSA64FO731meZsDLxEMnmNjsOqvAJqWt4kWqIi_pyW3YXYx'
    }
})
