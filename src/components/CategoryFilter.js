import React, { useState } from "react";

function CategoryFilter(props) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCategories = () => {
    const { categories } = props;
    if (!categories || !Array.isArray(categories)) {
      return null;
    }
    return categories.map((category, index) => (
      <button
        key={index}
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </button>
    ));
  };
  
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories()}
    </div>
  );
}

export default CategoryFilter;
