import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MultiLevelMenu.fa';

const MenuContainer = styled.ul`
    margin-bottom: 0;
`;

const SubMenuItem = styled.li`
    cursor: pointer;
    color: #0D3F5E;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5rem;
    &.active {
        text-decoration: underline;
    }
    &.secondLevelMenu {
        padding-left: 0;
    }
    &.thirdLevelMenu {
        font-style: normal;
        font-size: 0.75rem;
        line-height: 1rem;
        padding-bottom: 0;
        padding-top: 0.5rem;
    }
    &.forthLevelMenu {
        font-style: normal;
        font-weight: normal;
        font-size: 0.75rem;
        line-height: 0.25rem;
    }
`;

const MenuIconContainer = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.125rem;
    color: #0D3F5E;
    margin-right: 1rem;
`;

const MultilevelMenu = (props) => {
    const { menuList, onMenuChange } = props;
    const [expandedList, updateExpandedList] = useState([]);

    const getClassName = (depthLevel) => {
        switch (depthLevel) {
            case 2: return 'secondLevelMenu';
            case 3: return 'thirdLevelMenu';
            case 4: return 'forthLevelMenu';
            default: return '';
        }
    }

    const isExpanded = (menuItem) => {
        return expandedList.find(function (element) { return element.menuId === menuItem.menuId });
    }

    const onMenuClick = (event, menuItem) => {
        event.stopPropagation();
        let newArr = [...expandedList];
        if (newArr.find(function (element) { return element.menuId === menuItem.menuId })) {
            newArr = newArr.filter((ele) => {
                return ele.depthLevel < menuItem.depthLevel
            });
        } else {
            if (newArr.find(function (element) { return element.depthLevel === menuItem.depthLevel })) {
                newArr = newArr.filter((ele) => {
                    return ele.depthLevel < menuItem.depthLevel
                });
            }
            newArr.push(menuItem);
        }
        updateExpandedList(newArr);
        onMenuChange({ selectedMenu: menuItem });
    };

    return (
        <MenuContainer>
            {
                menuList.map((menuItem) => {
                    return <SubMenuItem className={`${getClassName(menuItem.depthLevel)}`} onClick={(event) => onMenuClick(event, menuItem)}>
                        {menuItem.depthLevel === 1 ? <MenuIconContainer>
                            <FontAwesomeIcon icon={['fa', menuItem.iconName]} />
                        </MenuIconContainer> : null}
                        {menuItem.menuTitle}
                        {menuItem.subMenu && menuItem.subMenu.length > 0 && isExpanded(menuItem) &&
                            <MultilevelMenu menuList={menuItem.subMenu} onMenuChange={onMenuChange} />
                        }
                    </SubMenuItem>
                })
            }
        </MenuContainer>
    );
}

export default MultilevelMenu;