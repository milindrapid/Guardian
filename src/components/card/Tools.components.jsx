import React, { useState } from 'react';
import ToolCards from './ToolCard';
import { TOOL_DATA } from '../../data';
import { FAVORITE_TOOL } from '../../data';
import GridIcon from '../../images/grid-icon.svg';
import ListIcon from '../../images/list-icon.svg';

const Tools = () => {
    const [id, setId] = useState('');
    const [gridView, setGridView] = useState(true);
    const [favoriteTool, setFavoriteTool] = useState(0);

    const onRadioChange = (id) => {
        setFavoriteTool(id)
    }

    const getFavoriteTool = () => {
        return (
            FAVORITE_TOOL.map(tool => (
                <div className="radio">
                    <input
                        className="radio-button"
                        checked={tool.id === favoriteTool}
                        type="radio"
                        value={tool.value}
                        onChange={() => onRadioChange(tool.id)} />
                    {tool.value}
                </div>
            ))
        )
    }

    const getToolItem = () => {
        let toolsList = id === '' ? TOOL_DATA : TOOL_DATA.filter((item) => item.id === id)
        return (
            toolsList.length === 0 ? <label style={{ margin: '50px' }}>No Tool Avalibale</label> :
                toolsList.map(tool => (
                    <div>
                        <ToolCards
                            id={tool.id}
                            title={tool.title}
                            content={tool.content}
                            imageUrl={tool.imageUrl}
                            isFavorite={tool.isFavorite}
                            favIconClickHandle={() => favIconClickHandle(tool.id)} />
                    </div>
                ))
        )
    }

    const favIconClickHandle = (id) => {
        console.log('favId', id)
    }

    const searchCallBack = (event) => {
        if (event.which === 13) { //code of enter button is 13
            let searchId = event.target.value
            if (!isNaN(searchId)) {
                setId(searchId);
            } else {
                alert('Invalid Id');
            }
        }
    }

    const showViewChangeIcon = () => {
        let icon = '';
        icon = gridView ? ListIcon : GridIcon;
        return (
            <img className="view-change-icon " src={icon} alt={icon} onClick={changeView} />
        )
    }

    const changeView = () => {
        setGridView(gridView ? false : true);
    }

    return (
        <div>
            {/* {showViewChangeIcon()} */}
            <label className="title">Tools</label>
            <div className="base-container">
                {getToolItem()}
            </div>
        </div>
    )
}


export default Tools;