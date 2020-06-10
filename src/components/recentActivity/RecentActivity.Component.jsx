import React from 'react';
import './recentActivity.scss';
import CustomDropDown from '../../common/customDropDown/dropdown.Component';

const RecentActivity = (props) => {

    const onItemChange = (item) => {
        console.log(item);
    }

    let items = [{
        id: 1,
        text: 'Today'
    }, {
        id: 2,
        text: 'Two'
    }, {
        id: 3,
        text: 'Three'
    }]

    return (
        <div className="recent-activity-container">
            <div className="recent-activity-header">
                <p>Recent Activity</p>
                <CustomDropDown
                    items={items}
                    optionText='text'
                    onItemChange={onItemChange}
                    selectedOption={1}
                    optionValue="id"
                />
            </div>
            <div className="recent-activity-body">
                <div className="recent-activity">
                    <div className="activity-details">
                        <div className="first-section">
                            <div className="icon-section">
                                <span className="ic-notepad"></span>
                            </div>
                            <div className="data-section">
                                <div className="activity-header">
                                    <p className="margin-0">Case Updates</p>
                                    <button>7 NEW</button>
                                </div>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="second-section">
                            <button className="view-all">View All</button>
                            <button className="dismiss-all"></button>
                        </div>
                    </div>
                </div>
                <div className="recent-activity">
                    <div className="activity-details">
                        <div className="first-section">
                            <div className="icon-section">
                                <span className="ic-notepad"></span>
                            </div>
                            <div className="data-section">
                                <div className="activity-header">
                                    <p className="margin-0">Policy Alerts</p>
                                    <button>1 NEW</button>
                                </div>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="second-section">
                            <button className="view-all">View All</button>
                            <button className="dismiss-all"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentActivity;