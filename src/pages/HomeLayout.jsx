import { useNavigation, Outlet } from "react-router-dom";
import HomeLayoutStyle from "../styles/HomeLayoutStyle";
import { Menu, Loading } from "../pages";

const HomeLayout = (props) => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <HomeLayoutStyle>
      <section className="left-section">
        <Menu />
      </section>
      <section className="right-section">
        {isPageLoading ? <Loading /> : <Outlet />}
      </section>
    </HomeLayoutStyle>
  );
};

export default HomeLayout;
