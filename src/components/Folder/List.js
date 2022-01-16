import React from 'react';
import ListItem from "./ListItem";

const List = ({item, all, setAll}) => {

    return (
        <ul className="folder__list">
            {item.tasks.length ? '' : <li className="folder__list-no">В данной папке задачи отсутсвуют</li>}
            {item.tasks.map((el) => (
                <ListItem key={el.id} item={item} el={el} setAll={setAll} all={all}/>
            ))}
        </ul>
    );
};

export default List;