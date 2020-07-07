import React, { useState, useEffect } from 'react';
import './SavedResources.scss';
import FolderComponent from '../FolderComponent/FolderComponent.Component';
import RecentData from '../RecentData/RecentData.Component';
import ContactOption from '../ContactOption/ContactOption.Component';

const SavedResources = (props) => {
    const [folderList, setFolderList] = useState([]);
    const [updatedList, setupdatedList] = useState([]);
    const [viewedList, setviewedList] = useState([]);
    const [contactList, setcontactList] = useState([]);

    useEffect(() => {
        setFolderList([
            {
                name: 'Folder1',
                count: 12
            }, {
                name: 'Folder2',
                count: 2
            }, {
                name: 'Folder3',
                count: 4
            }, {
                name: 'Folder4',
                count: 11
            }, {
                name: 'Folder5',
                count: 8
            }
        ]);
        setupdatedList([
            {
                itemid: 1,
                itemTitle: 'Agency Recognition Program Reports',
                itemDescription: 'Updated May 25, 2020'
            }, {
                itemid: 2,
                itemTitle: 'Playbook for Corona Virus and Volatility',
                itemDescription: 'Updated May 25, 2020'
            }, {
                itemid: 3,
                itemTitle: 'Bank Draft Cutoff Dates for July 2020',
                itemDescription: 'Updated May 25, 2020'
            }, {
                itemid: 4,
                itemTitle: 'Amendment for Broker Agreement',
                itemDescription: 'Updated May 25, 2020'
            }
        ]);
        setviewedList([
            {
                itemid: 1,
                itemTitle: 'Business Resource Center',
                itemDescription: 'Updated May 25, 2020'
            }, {
                itemid: 2,
                itemTitle: 'Tips for transitioning your business to function...',
                itemDescription: 'Updated May 25, 2020'
            }, {
                itemid: 3,
                itemTitle: 'Life Product Illustration Tools',
                itemDescription: 'Updated May 21, 2020'
            }, {
                itemid: 4,
                itemTitle: "Women's Virtual Training Events",
                itemDescription: 'Updated May 20, 2020'
            }
        ]);
        setcontactList([
            {
                contactId: 1,
                name: 'FAQs',
                description: 'Find out more information in our library of Frequesntly Asked Questions.'
            }, {
                contactId: 2,
                name: 'Forums',
                description: 'Learn from our knowledgeable and growing community.'
            }, {
                contactId: 3,
                name: 'Contact',
                description: 'Chat the Guardian service desk, or checkout our directory of home office staff.'
            }
        ]);
    }, [])

    return (
        <div className="saved-resource-container">
            <h4>Saved resources</h4>
            <div className="folder-container">
                {folderList && folderList.length ?
                    folderList.map((item) => {
                        return <FolderComponent folderDetails={item} />
                    })
                    : ''}
            </div>
            <div className="see-all">
                <button>See all<span className="ic-right-arrow"></span></button>
            </div>
            <div className="recent-data-container">
                <RecentData title="Recently updated" itemList={updatedList} />
                <RecentData title="Recently Viewed" itemList={viewedList} />
            </div>
            <hr></hr>
            <div className="footer-section">
                <h4>Didn't find what you needed?</h4>
                <div className="contact-options">
                    {contactList && contactList.length ?
                        contactList.map((item) => {
                            return <ContactOption contactItem={item} />
                        })
                        : ''}
                </div>
            </div>
        </div>
    );
}

export default SavedResources;