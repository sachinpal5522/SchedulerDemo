import { Outlet } from "react-router-dom";
import HomeLayoutStyle from "../styles/HomeLayoutStyle";
import { Menu, Loading } from "../pages";
import { useSelector } from "react-redux";

const HomeLayout = (props) => {
  const { isPageLoading } = useSelector((state) => {
    return state.appointments;
  });
  return (
    <HomeLayoutStyle>
      <section className="left-section">
        <Menu />
      </section>
      <section className="right-section">
        {isPageLoading ? <Loading /> : null}
        <Outlet />
      </section>
    </HomeLayoutStyle>
  );
};

export default HomeLayout;
