import React from 'react';
import Category from './Category';

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
