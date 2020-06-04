import React, { useState, useEffect } from "react";
import "./App.css";
import { dummyData } from "./data";

import CardList from "./components/CardList";
import SkeletonCard from "./components/SkeletonCard";
// const Tag =React.lazy(()=>import(./components/SkeletonCard))
import Pagination from './common/customPagination/pagination.component';
import Search from './components/search/Search';
import ToolCard from './components/card/Tools.components';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load this effect on mount
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 5000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  const onPageChanged = (data) => {
    console.log('current page', data.currentPage);
  }

  const getSearchResult = (searchKey) => {
    console.log('search', searchKey)
  }

  return (
    <div className="App">
      <Search searchCallBack={getSearchResult} />
      {loading && <SkeletonCard />}
      {!loading &&
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList list={list} />
              <hr />
            </section>
          );
        })}

      <ToolCard />

      <Pagination
        currentPage={2}
        totalCount={26}
        itemsPerPage={3}
        pageRange={4}
        onChange={onPageChanged}
      />
    </div>
  );
};




export default App;
