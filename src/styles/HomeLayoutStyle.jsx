import styled from "styled-components";

export default styled.main`
  padding: 0rem;
  display: flex;
  height: 100%;
  width: 100%;
  color: var(--primary-font-color);
  section.left-section {
    width: var(--var-menu-left-menu-width);
  }
  section.right-section {
    width: calc(100% - var(--var-menu-left-menu-width));
    background: var(--right-child-background-color);
  }
`;
