

export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "gb",
    name: "United Kingdom",
  },
];




export const base_url = "https://newsapi.org/v2"
export const api_key = "45ee7df7bb714fbdbb2b519e10230ae9"

export const getNewsAPI = (category, country = "gb") => {
  return `${base_url}/top-headlines?country=${country}&category=${category}&apiKey=${api_key}`;
};

export const getSourceAPI = (sources) => {
  return `${base_url}/top-headlines/${sources}?apiKey=${api_key}`;
};
