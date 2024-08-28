import React from "react";
import Cards from "../Cards/Cards";
const Categories = ({ categoryData }) => {
  return (
    <div className="shadow-lg">
      <h1 className="font-semibold">{categoryData.name}</h1>
      <div className="flex  justify-evenly h-60 items-center">
        {categoryData.widgets.map((card) => (
          <Cards key={card.id} name={card.name} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
