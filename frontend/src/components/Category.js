import React from 'react';
import {Link} from 'react-router-dom';

/**
 * @description Fucntional component represents an item - "Category" 
 * @description from the top left menu with categories and enables to filter the post list according
 * @description to the clicked category
 * @param {object} category - {name, path}
 * @param {function} onClick - tells the component what to do when category clicked
 * @param {string} currentCategoryFiltered - contains the name of the current filter
 */
const Category = ({
    category,
    onClick,
    currentCategoryFiltered
}) => {

    if(category.name === currentCategoryFiltered){
        return  <Link   key={category.name} 
                        to={`/${category.path}`}
                        className="list-group-item list-group-item-action active" 
                        onClick={onClick}>
                        {category.name}
                </Link>
    }
    
    return(
        <Link   key={category.name}
                to={`/${category.path}`}
                className="list-group-item list-group-item-action"
                onClick={() => onClick(category.name)}>
            {   category.name}
        </Link>
    );
}

export default Category;