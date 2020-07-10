import React, { useState } from 'react';
import clonedeep from 'lodash.clonedeep';
import MultiLevelMenu from '../../common/MultiLevelMenu/MultiLevelMenu';

const getSubMenu = (menuItem) => {
    switch (menuItem.menuId) {
        case 'L1': return [{
            menuId: 'L2',
            menuTitle: 'Events',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 2,
            subMenu: []
        }];
        case 'L2': return [{
            menuId: 'L3',
            menuTitle: 'L3',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 3,
            subMenu: []
        }, {
            menuId: 'L6',
            menuTitle: 'L6',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 3,
            subMenu: []
        }]
        case 'L3': return [{
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
        case 'L6': return [{
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
        }];
        case 'L9': return [{
            menuId: 'L10',
            menuTitle: 'Product Resources',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 2,
            subMenu: []
        }]
        case 'L10': return [{
            menuId: 'L11',
            menuTitle: 'Life Insurance',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 3,
            subMenu: []
        }, {
            menuId: 'L14',
            menuTitle: 'Disability Insurance',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 3,
            subMenu: []
        }];
        case 'L11': return [{
            menuId: 'L12',
            menuTitle: 'Product Portfolio',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 4,
            subMenu: []
        }, {
            menuId: 'L13',
            menuTitle: 'Marketing',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 4,
            subMenu: []
        }];
        case 'L14': return [{
            menuId: 'L15',
            menuTitle: 'Client Services',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 4,
            subMenu: []
        }, {
            menuId: 'L16',
            menuTitle: 'Compliance',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 4,
            subMenu: []
        }]
        default: return [];
    }
}

const MultiLevelMenuContainer = (props) => {
    const [menuList, setMenuList] = useState([{
        menuId: 'L1',
        menuTitle: 'Favorites',
        iconName: 'bookmark',
        breadCrumpTrial: '',
        pageTitle: '',
        depthLevel: 1,
        subMenu: []
    }, {
        menuId: 'L9',
        menuTitle: 'Resources',
        iconName: 'bookmark',
        breadCrumpTrial: '',
        pageTitle: '',
        depthLevel: 1,
        subMenu: []
    }]);

    const [activeMenuId, setActiveMenuId] = useState(null);

    const getSelectedMenu = (menuObj, selectedMenu) => {
        if (menuObj.menuId === selectedMenu.menuId) {
            return menuObj
        }
        if (menuObj.subMenu) {
            for (let item of menuObj.subMenu) {
                let check = getSelectedMenu(item, selectedMenu)
                if (check) {
                    return check
                }
            }
        }
        return null
    }

    const onMenuChange = (data) => {
        let tempMenuList = clonedeep(menuList);
        let selectedMenu = null;
        for (let menuObj of tempMenuList) {
            selectedMenu = getSelectedMenu(menuObj, data.selectedMenu)
            if (selectedMenu) {
                break
            }
        }
        selectedMenu.subMenu = getSubMenu(selectedMenu);
        setMenuList(tempMenuList);
        setActiveMenuId(data.selectedMenu.menuId);
        console.log('menu', data.selectedMenu);
    }

    return (
        <div className="multi-level-menu-container">
            <MultiLevelMenu menuList={menuList} onMenuChange={onMenuChange} activeMenuId={activeMenuId} />
        </div>
    )

};

export default MultiLevelMenuContainer;