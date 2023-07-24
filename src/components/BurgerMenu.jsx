import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Menu>
      <li><Link to="/kampaniyalar">Kampaniyalar</Link></li>
      <li><Link to="/brendlər">Brendlər</Link></li>
      <li><Link to="/filiallar">Filiallar</Link></li>
      <li><Link to="/əlaqə">Əlaqə</Link></li>
    </Menu>
  );
};