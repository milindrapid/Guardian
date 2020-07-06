import React, { useState } from 'react';

const MultilevelMenu = (props) => {
    const { menuList, onMenuChange } = props;
    const [expandedList, updateExpandedList] = useState([]);

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
        <ul>
            {
                menuList.map((menuItem) => {
                    return <li onClick={(event) => onMenuClick(event, menuItem)}>
                        {menuItem.menuTitle}
                        {menuItem.subMenu && menuItem.subMenu.length > 0 && expandedList.find(function (element) { return element.menuId === menuItem.menuId }) &&
                            <MultilevelMenu menuList={menuItem.subMenu} onMenuChange={onMenuChange} />
                        }
                    </li>;
                })
            }
        </ul>
    );
}

export default MultilevelMenu;