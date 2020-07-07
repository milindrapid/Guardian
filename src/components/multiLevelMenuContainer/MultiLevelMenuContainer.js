import React, { useState } from 'react';
import MultiLevelMenu from '../../common/MultiLevelMenu/MultiLevelMenu';

const getSubMenu = (menuItem) => {
    switch (menuItem.menuId) {
        case 'L1': return [{
            menuId: 'L2',
            menuTitle: 'L2',
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
            menuTitle: 'L10',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 2,
            subMenu: []
        }]
        case 'L10': return [{
            menuId: 'L11',
            menuTitle: 'L11',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 3,
            subMenu: []
        }, {
            menuId: 'L14',
            menuTitle: 'L14',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 3,
            subMenu: []
        }];
        case 'L11': return [{
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
        }];
        case 'L14': return [{
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
        default: return [];
    }
}

const MultiLevelMenuContainer = (props) => {
    const [menuList, setMenuList] = useState([{
        menuId: 'L1',
        menuTitle: 'L1',
        breadCrumpTrial: '',
        pageTitle: '',
        depthLevel: 1,
        subMenu: []
    }, {
        menuId: 'L9',
        menuTitle: 'L9',
        breadCrumpTrial: '',
        pageTitle: '',
        depthLevel: 1,
        subMenu: []
    }]);

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
        let tempMenuList = JSON.parse(JSON.stringify(menuList));
        let selectedMenu = null;
        for (let menuObj of tempMenuList) {
            selectedMenu = getSelectedMenu(menuObj, data.selectedMenu)
            if (selectedMenu) {
                break
            }
        }
        selectedMenu.subMenu = getSubMenu(selectedMenu);
        setMenuList(tempMenuList);
        console.log('menu', data.selectedMenu);
    }

    return (
        <div className="multi-level-menu-container">
            <MultiLevelMenu menuList={menuList} onMenuChange={onMenuChange} />
        </div>
    )

};

export default MultiLevelMenuContainer;