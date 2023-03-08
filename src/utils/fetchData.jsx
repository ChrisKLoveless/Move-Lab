  export const fetch = require('node-fetch');

  export const ApiNinjaOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data)
    return data;
  };
  