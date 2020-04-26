const apiKey =
  "UwEaM05ZCVsWmqAUghRzmCmqPLTOCfCHFKMI1jeWTf-7lY7cSh7VgIrjDtXY9R3H5Snz2owO6XrH2aA6JD_Yu9CtoI-SPuSInl5HZxievNNQgMwK9t5Y0cNGu7yjXnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              url: business.url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              country: business.location.country,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  }
};

export default Yelp;
