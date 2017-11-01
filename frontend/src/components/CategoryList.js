import React from 'react';
import Category from './Category';

/**
 * @description functional component represent the list of categories (used for the top left menu) to filter list 
 * @param {array} categories - array of objects (categories)
 * @param {function} onCategoryClick - tells the component what to do when clicked on item
 * @param {string} currentCategoryFiltered - contains the name of the current filter
 */
const CategoryList = ({ 
    categories,
    onCategoryClick,
    currentCategoryFilter
 }) => (
    <div className="list-group">
        
        <Category   key={"all"}
                    category={{"name":"all", "path":""}}
                    currentCategoryFiltered={currentCategoryFilter}
                    onClick={onCategoryClick}/>
        
        {categories.categories.map(category =>
            <Category   key={category.name} 
                        category={category} 
                        currentCategoryFiltered={currentCategoryFilter}
                        onClick={onCategoryClick} />
        )}
    </div>
    

    );

export default CategoryList;
