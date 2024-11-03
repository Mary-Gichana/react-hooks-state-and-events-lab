import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [...new Set(items.map((item) => item.category))];
  const filteredItems =
    selectedCategory && selectedCategory !== "All"
      ? items.filter((item) => item.category === selectedCategory)
      : items;

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">Filter by category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
