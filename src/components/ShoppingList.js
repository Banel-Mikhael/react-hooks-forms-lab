import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onitemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [Search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  const itemsToDisplay = items
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory
  )
  .filter((item) => {
    return item.name.toLowerCase().includes(Search.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onitemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange ={setSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;