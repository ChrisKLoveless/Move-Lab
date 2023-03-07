  export const fetch = require('node-fetch');

  // export const SearchOptions = {
  //   method: 'GET',
  //   url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=',
  //   headers: {
  //     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  //     'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  //   }
  // };

  export const fetchData = async (url, SearchOptions) => {
    const response = await fetch(url, SearchOptions);
    const data = await response.json();
    // console.log(data)
    return data;
  };
  