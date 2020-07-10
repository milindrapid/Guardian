import React from 'react';
import MultiLevelMenu from './MultiLevelMenu';

export default {
    title: 'Multi level menu',
    component: 'MultiLevelMenu'
};

const menuList = [{
    menuId: 'L1',
    menuTitle: 'Favorites',
    iconName: 'bookmark',
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
    menuTitle: 'Resources',
    iconName: 'bookmark',
    breadCrumpTrial: '',
    pageTitle: '',
    depthLevel: 1,
    subMenu: [{
        menuId: 'L10',
        menuTitle: 'Product Resources',
        breadCrumpTrial: '',
        pageTitle: '',
        depthLevel: 2,
        subMenu: [{
            menuId: 'L11',
            menuTitle: 'Life Insurance',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 3,
            subMenu: [{
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
            }]
        }, {
            menuId: 'L14',
            menuTitle: 'Disability Insurance',
            breadCrumpTrial: '',
            pageTitle: '',
            depthLevel: 3,
            subMenu: [{
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
        }]
    }]
}];

export const BasicMenu = () => <MultiLevelMenu menuList={menuList} />

BasicMenu.story = {
    name: 'Basic Structure'
};