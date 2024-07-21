import { NavLink, Outlet } from "react-router-dom";
import HomeLayoutStyle from "../styles/HomeLayoutStyle";
import { Menu } from "../pages";

const HomeLayout = (props) => {
  return (
    <HomeLayoutStyle>
      <section className="left-section">
        <Menu />
      </section>
      <section className="right-section">
        <Outlet />
      </section>
    </HomeLayoutStyle>
  );
};

export default HomeLayout;
