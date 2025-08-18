import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCart from '../Components/NewsCart';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    // console.log(data);
    // console.log(id);
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(()=>{
        if (id == "0") {
            setCategoryNews(data);
            return;
        } else if (id == "1") {
            const filteredNews = data.filter(
                (news) => news.others.is_today_pick == true
            );
            setCategoryNews(filteredNews);
        } else {
            const filteredNews = data.filter((news) => news.category_id == id);
            // console.log(filteredNews);
            setCategoryNews(filteredNews);
        }
        
    },[data, id])

    return (
        <div className=''>
            <h2 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> news found</h2>
            <div className='gird grid-cols-1 space-y-5'>
                {categoryNews.map ((news)=>(<NewsCart key={news.id} news={news}></NewsCart>))}
            </div>
        </div>
    );
};

export default CategoryNews;