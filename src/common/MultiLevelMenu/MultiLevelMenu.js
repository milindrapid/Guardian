import React, { useState } from 'react';

const MultilevelMenu = (props) => {
    const { onMenuChange } = props;
    const [menuList, updateMenuList] = useState(props.menuList);

    const onMenuClick = (event, menuItem) => {
        event.stopPropagation();
        let newArr = [...menuList];
        newArr.map((element) => {
            if (element.menuId === menuItem.menuId) {
                element.isExpanded = !element.isExpanded;
            }
        });
        updateMenuList(newArr);
        onMenuChange({ selectedMenu: menuItem });
    }

    return (
        <ul>
            {
                menuList.map((menuItem) => {
                    return <li onClick={(event) => onMenuClick(event, menuItem)}>
                        {menuItem.menuTitle}
                        {menuItem.subMenu && menuItem.subMenu.length > 0 && menuItem.isExpanded &&
                            <MultilevelMenu menuList={menuItem.subMenu} onMenuChange={onMenuChange} />
                        }
                    </li>;
                })
            }
        </ul>
    );
}

export default MultilevelMenu;