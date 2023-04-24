import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  function handleClick(){
    setincart(()=> !incart)
  }

const [incart, setincart] = useState(false);

  return (
    <li className={incart? "in-cart" : ""}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button onClick={handleClick} className="add">{incart? "Remove From Cart" : "Add To Cart"}</button>
  </li>
  );
}

export default Item;
