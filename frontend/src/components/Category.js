import React from 'react';
import {Link} from 'react-router-dom';


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