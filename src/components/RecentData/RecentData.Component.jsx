import React from 'react';
import './RecentData.scss';

const RecentData = (props) => {
    return (
        <div className="recent-data">
            <h5>{props.title}</h5>
            {props.itemList.map((item) => {
                return (
                    <div key={item.itemId} className="recent-data-item">
                        <p className="recent-item-name">{item.itemTitle}</p>
                        <p>{item.itemDescription}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default RecentData;