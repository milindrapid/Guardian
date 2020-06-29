import React from 'react';
import OldGolItem from '../OldGolItem/OldGolItem';
import './AccessOldGol.scss';


const AccessOldGol = (props) => {
    const oldGolItemList = [
        {
            itemId: 1,
            itemName: 'Book of Business',
            itemDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            iconName: 'chart-line'
        }, {
            itemId: 2,
            itemName: 'eServices',
            itemDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            iconName: 'clipboard-list'
        }, {
            itemId: 3,
            itemName: 'Track New Business',
            itemDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            iconName: 'briefcase'
        }, {
            itemId: 4,
            itemName: 'Client Manager',
            itemDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            iconName: 'user'
        }
    ]

    return (
        <div className="old-gol-container">
            <div className="old-gol-header">Access the Old GOL</div>
            <div className="old-gol-list">
                {
                    oldGolItemList.map((item) => {
                        return <OldGolItem key={item.id} oldGolItem={item} />
                    })
                }
            </div>
        </div>
    )

};

export default AccessOldGol;