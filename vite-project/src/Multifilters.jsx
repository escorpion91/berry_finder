import React, { useEffect, useState } from 'react';
import { items } from './Items';
import './style.css';

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  const filters = ['Spicy', 'Dry', 'Sweet', 'Bitter', 'Sour'];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      const filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempItems = items.filter((item) =>
        selectedFilters.every((filter) => item.categories.includes(filter))
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${category.toLowerCase()} ${
              selectedFilters.includes(category) ? 'active' : ''
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="category">{item.categories.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
