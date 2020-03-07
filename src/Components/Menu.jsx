import React from "react";

const Menu = ({ listofProsducts }) => {
  return (
    <label onSubmit={listofProsducts} id="menu">
      <label>Email</label>
      <input name="burger" type="dishes" id="1"></input>
      <button id="order">Send Order</button>

    </label>
  );
};

export default Menu;