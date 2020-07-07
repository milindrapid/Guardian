import React from 'react';
import MultiLevelMenu from '../../common/MultiLevelMenu/MultiLevelMenu';

const onMenuChange = (data) => {
    console.log('menu', data);
}

const MultiLevelMenuContainer = (props) => {
    const menuList = [{
        menuId: 'L1',
        menuTitle: 'L1',
        breadCrumpTrial: '',
        pageTitle: '',
        depthLevel: 1,
        subMenu: [{
            menuId: 'L2',
            menuTitle: 'L2',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 2,
            subMenu: [{
                menuId: 'L3',
                menuTitle: 'L3',
                breadCrumpTrial: '',
                pageTitle: '',
                depthLevel: 3,
                subMenu: [{
                    menuId: 'L4',
                    menuTitle: 'L4',
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }, {
                    menuId: 'L5',
                    menuTitle: 'L5',
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }]
            }, {
                menuId: 'L6',
                menuTitle: 'L6',
                breadCrumpTrial: '',
                pageTitle: '',
                depthLevel: 3,
                subMenu: [{
                    menuId: 'L7',
                    menuTitle: 'L7',
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }, {
                    menuId: 'L8',
                    menuTitle: 'L8',
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }]
            }]
        }]
    }, {
        menuId: 'L9',
        menuTitle: 'L9',
        breadCrumpTrial: '',
        pageTitle: '',
        depthLevel: 1,
        subMenu: [{
            menuId: 'L10',
            menuTitle: 'L10',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 2,
            subMenu: [{
                menuId: 'L11',
                menuTitle: 'L11',
                breadCrumpTrial: '',
                pageTitle: '',
                depthLevel: 3,
                subMenu: [{
                    menuId: 'L12',
                    menuTitle: 'L12',
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }, {
                    menuId: 'L13',
                    menuTitle: 'L13',
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }]
            }, {
                menuId: 'L14',
                menuTitle: 'L14',
                breadCrumpTrial: '',
                pageTitle: '',
                depthLevel: 3,
                subMenu: [{
                    menuId: 'L15',
                    menuTitle: 'L15',
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }, {
                    menuId: 'L16',
                    menuTitle: 'L16',
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }]
            }]
        }]
    }];

    return (
        <div className="multi-level-menu-container">
            <MultiLevelMenu menuList={menuList} onMenuChange={onMenuChange} />
        </div>
    )

};

export default MultiLevelMenuContainer;