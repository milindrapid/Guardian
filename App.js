import React, { useState, useEffect } from "react";
import "./App.css";
import { dummyData } from "./data";

import SkeletonCard from "./components/SkeletonCard";
// const Tag =React.lazy(()=>import(./components/SkeletonCard))
import Pagination from "./common/customPagination/pagination.component";
import Search from "./components/search/Search";
import ToolCard from "./components/card/Tools.components";
import UserNameBar from "./components/userNameBar/UserNameBar.Component";
import GridIcon from "./images/grid-icon.svg";
import ListIcon from "./images/list-icon.svg";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);
  

  // Load this effect on mount
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 500);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  const onPageChanged = (data) => {
    console.log("current page", data.currentPage);
  };

  const getSearchResult = (searchKey) => {
    console.log("search", searchKey);
  };

  const handleList = () => {
    setGridView(false);
    setListView(true);
  };

  const handleGrid = () => {
    setGridView(true);
    setListView(false);
  };

  const onSearchMenuIconClick = (id) => {
    switch (id) {
      case 1:
        return alert("Email");
      case 2:
        return alert("Calendar");
      case 3:
        return alert("Activity");
      case 4:
        return alert("Favorite Tools");
      default:
        break;
    }
  };

  

  return (
    <div className="App">
      <Search searchCallBack={getSearchResult} onSearchMenuIconClick={onSearchMenuIconClick} />
      <UserNameBar userName="Taylor" />
      <div>
        <div
          className="btn-group"
          style={{ paddingTop: "15px", float: "right" }}
        >
          <img
            className="search-menu-icon"
            src={GridIcon}
            onClick={() => handleGrid()}
            alt="grid"
          />
          <img
            className="search-menu-icon"
            src={ListIcon}
            onClick={() => handleList()}
            alt="list"
          />
        </div>
      </div>

      {loading && <SkeletonCard />}
      {!loading &&
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <ToolCard listView={listView} gridView={gridView} />
              <hr />
            </section>
          );
        })}

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
