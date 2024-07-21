import styled from "styled-components";

export default styled.div`
  height: 100%;
  background: var(--left-child-background-color);

  .logo {
    display: flex;
    margin: 1rem 0rem;
  }

  .logo .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    font-size: 2rem;
    color: var(--logo-color);
  }

  .logo .slogan {
    font-size: var(--exsmall-font-size);
    font-weight: 500;
    color: var(--light-font-color);
  }

  .menu-list a {
    text-decoration: none;
  }
  .menu-list .icon {
    height: var(--small-font-size);
    width: var(--small-font-size);
    margin-right: 0.5rem;
  }

  .menu-list .menu-item {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 3rem;
    font-size: var(--small-font-size);
    font-weight: 600;
    padding-left: 1rem;
  }
  .menu-list .menu-item:hover {
    background: var(--primary-color);
    color: var(--font-color-for-primary-background);
  }
`;
