import React, {
  useState,
  //  useEffect
} from "react";
import "./Home.css";
import { dummyData, UPDATES_FROM_GUARDIAN, UPCOMING_EVENT } from "../../data";

// import CardList from "../../components/CardList";
// import SkeletonCard from "../../components/SkeletonCard";
// const Tag =React.lazy(()=>import(./components/SkeletonCard))
import Pagination from "../../common/customPagination/pagination.component";
import Search from "../../components/search/Search";
// import ToolCard from "../../components/card/Tools.components";
import UserNameBar from "../../components/userNameBar/UserNameBar.Component";
import ImportantNotice from "../../components/importantNotice/ImportantNotice";
import GuardianUpdates from "../../components/GuardianUpdates/GuardianUpdates";
import RecentActivity from "../../components/recentActivity/RecentActivity.Component";
import EventCard from "../../components/events/EventCard/EventCard.Component";
import Events from "../../components/events/Events";

const Home = () => {
  // const [videos, setVideos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [showImportantNotice, setShowImportantNotice] = useState(true);

  // Load this effect on mount
  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setVideos(dummyData);
  //     setLoading(false);
  //   }, 5000);
  //   // Cancel the timer while unmounting
  //   return () => clearTimeout(timer);
  // }, []);

  const onPageChanged = (data) => {
    console.log("current page", data.currentPage);
  };

  const getSearchResult = (searchKey) => {
    console.log("search", searchKey);
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

  const closeImpNotice = () => {
    setShowImportantNotice(false);
  };

  const onItemClick = (link) => {
    alert(link);
  };

  return (
    <div className="App">
      <Search
        searchCallBack={getSearchResult}
        onSearchMenuIconClick={onSearchMenuIconClick}
      />
      <div className="hrz-line" />
      {showImportantNotice ? (
        <ImportantNotice url="/#" close={closeImpNotice} />
      ) : null}
      <UserNameBar userName="Taylor" />
      <div className="hrz-line" />
      <RecentActivity />
      <GuardianUpdates data={UPDATES_FROM_GUARDIAN} onItemClick={onItemClick} />
      <Events eventsData={UPCOMING_EVENT} onItemClick={onItemClick} />

      {/* {loading && <SkeletonCard />}
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

      <ToolCard /> */}

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

export default Home;
