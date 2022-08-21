 export const exerciseoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b43d126071msh9cb18fee9c23e25p1fdbd8jsn469e767552ef',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };





  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

