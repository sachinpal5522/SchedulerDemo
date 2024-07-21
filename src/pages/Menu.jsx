import React from "react";
import MenuLayoutStyle from "../styles/MenuLayoutStyle";
import { companyInfo, navLinks } from "../config";
import { NavLink } from "react-router-dom";

const { icon, name, slogan } = companyInfo;
const Menu = () => {
  return (
    <MenuLayoutStyle>
      <section className="logo">
        <div className="icon-container">{icon()}</div>
        <div className="title-container">
          <h3 className="title">{name}</h3>
          <p className="slogan">{slogan}</p>
        </div>
      </section>
      <section className="menu-list">
        {navLinks.map((link) => {
          let { id, name, path, icon } = link;
          return (
            <NavLink key={id} className="menu-item" to={path}>
              <div key={id} className="icon">
                {icon()}
              </div>
              {name}
            </NavLink>
          );
        })}
      </section>
    </MenuLayoutStyle>
  );
};

export default Menu;
