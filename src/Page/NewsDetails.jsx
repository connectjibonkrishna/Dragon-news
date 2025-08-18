import React, { useEffect, useState } from "react";
import RightAside from "../Components/homeLayout/RightAside";
import Header from "../Components/Header";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
    const { id } = useParams();
    //   const { title } = news;
    //   console.log(id);
    const [categoryNews, setCategoryNews] = useState([]);
  
    useEffect(() => {
      const filteredNews = data.filter((news) => news.id == id);
      setCategoryNews(filteredNews);
    }, [data, id]);
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          {categoryNews.map((news) => (
            <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
          ))}
          {/* <NewsDetailsCard data={data}></NewsDetailsCard> */}
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </div>
    </div>
  );
};

export default NewsDetails;
