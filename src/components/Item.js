import React, {useState} from "react";

function Item({ name, category }) {
  const [addCart, setCart] = useState('add')

  function updateCart(){
    if(addCart === 'add'){
      const updateCart = "in-cart remove"
      setCart(updateCart)
    }else{
      const updateCart = "add"
      setCart(updateCart)
    }
  }

  return (
    <li className={addCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addCart} onClick={updateCart}>{addCart === 'add' ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
