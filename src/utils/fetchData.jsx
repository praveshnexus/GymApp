export const exerciseOptions = {
  method: "GET",
  params: {
    limit: '1000',
    offset: '0'
  },
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "5f1b548cbamshe44f72ce00bdf1dp1a3fb4jsn6c954a39fad8",
  },
};

export const youtubeOptions = {
  method: 'GET',

  headers: {
    'x-rapidapi-key': '5f1b548cbamshe44f72ce00bdf1dp1a3fb4jsn6c954a39fad8',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
