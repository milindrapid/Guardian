import React from 'react';
import MultiLevelMenu from '../../common/MultiLevelMenu/MultiLevelMenu';

const onMenuChange = (data) => {
    console.log('menu', data);
}

const MultiLevelMenuContainer = (props) => {
    const menuList = [{
        menuId: 'L1',
        menuTitle: 'L1',
        isExpanded: false,
        breadCrumpTrial: '',
        pageTitle: '',
        depthLevel: 1,
        subMenu: [{
            menuId: 'L2',
            menuTitle: 'L2',
            isExpanded: false,
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 2,
            subMenu: [{
                menuId: 'L3',
                menuTitle: 'L3',
                isExpanded: false,
                breadCrumpTrial: '',
                pageTitle: '',
                depthLevel: 3,
                subMenu: [{
                    menuId: 'L4',
                    menuTitle: 'L4',
                    isExpanded: false,
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }, {
                    menuId: 'L5',
                    menuTitle: 'L5',
                    isExpanded: false,
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }]
            }, {
                menuId: 'L6',
                menuTitle: 'L6',
                isExpanded: false,
                breadCrumpTrial: '',
                pageTitle: '',
                depthLevel: 3,
                subMenu: [{
                    menuId: 'L7',
                    menuTitle: 'L7',
                    isExpanded: false,
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }, {
                    menuId: 'L8',
                    menuTitle: 'L8',
                    isExpanded: false,
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
        isExpanded: false,
        breadCrumpTrial: '',
        pageTitle: '',
        depthLevel: 1,
        subMenu: [{
            menuId: 'L10',
            menuTitle: 'L10',
            isExpanded: false,
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 2,
            subMenu: [{
                menuId: 'L11',
                menuTitle: 'L11',
                isExpanded: false,
                breadCrumpTrial: '',
                pageTitle: '',
                depthLevel: 3,
                subMenu: [{
                    menuId: 'L12',
                    menuTitle: 'L12',
                    isExpanded: false,
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }, {
                    menuId: 'L13',
                    menuTitle: 'L13',
                    isExpanded: false,
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }]
            }, {
                menuId: 'L14',
                menuTitle: 'L14',
                isExpanded: false,
                breadCrumpTrial: '',
                pageTitle: '',
                depthLevel: 3,
                subMenu: [{
                    menuId: 'L15',
                    menuTitle: 'L15',
                    isExpanded: false,
                    breadCrumpTrial: '',
                    pageTitle: '',
                    depthLevel: 4,
                    subMenu: []
                }, {
                    menuId: 'L16',
                    menuTitle: 'L16',
                    isExpanded: false,
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