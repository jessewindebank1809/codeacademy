import SearchBar from "../components/SearchBar/SearchBar"

// Client ID
// TiOMotZ8i4_fEt2nEmFzlw

const apiKey = 'UwEaM05ZCVsWmqAUghRzmCmqPLTOCfCHFKMI1jeWTf-7lY7cSh7VgIrjDtXY9R3H5Snz2owO6XrH2aA6JD_Yu9CtoI-SPuSInl5HZxievNNQgMwK9t5Y0cNGu7yjXnYx'

const Yelp = {}

search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
        headers: {
        Authorization: `Bearer ${apiKey}`}
    }).then(response => {
        return response.json();
    }).then(function(jsonResponse) {
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return [business.name, business.addresstt†††t†††]
            })
        } 
    })
};