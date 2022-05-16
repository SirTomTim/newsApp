import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./api";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [source, setSource] = useState();
  const [index, setIndex] = useState(1);
  

  const fetchNews = async () => {
    const { data } = await axios.get(getNewsAPI("general","gb"));
    setNews(data);
    setIndex(1);
  };

  const fetchNewsfromSource = async () => {
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setSource(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  useEffect(() => {
    fetchNewsfromSource();
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        news,
        setCategory,
        index,
        setIndex,
        
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
