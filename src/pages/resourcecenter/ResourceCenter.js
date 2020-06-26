import React from 'react';
import './ResourceCenter.scss';
import SearchBar from '../../common/customSearch/Search';
import TopicCard from '../../components/browseTopicCard/BrowseTopicCard';
import { TOPIC_CARD_DATA } from '../../data';

const searchBarCustomStyles = {
    'width': '50%',
    'borderRadius': '5px',
    'marginTop': '5rem',
    'marginLeft': '5rem'
}

const ResourceCenter = () => {

    const getSearchResult = (searchKey) => {
        console.log("Common search", searchKey);
    };

    const getTopicCard = () => {
        return (
            TOPIC_CARD_DATA.map(item => <TopicCard data={item} />
            )
        )
    }

    return (
        <div>
            <SearchBar searchBarCustomStyles={searchBarCustomStyles} placeHolder="Search Resources" searchResultCallBack={getSearchResult} />
            <div className="browse-topic-container">
                <label className="browse-topic-title">Browse topics</label>
                <div className="card-container">{getTopicCard()}</div>
            </div>
        </div>

    )

}

export default ResourceCenter;