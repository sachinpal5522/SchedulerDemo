import styled from "styled-components";

export default styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-transform: capitalize;
  &.red {
    border-top: 2px solid red;
  }
  &.purple {
    border-top: 2px solid purple;
  }
  &.green {
    border-top: 2px solid green;
  }
  &.orange {
    border-top: 2px solid orange;
  }
  &.blue {
    border-top: 2px solid blue;
  }
  &.default {
    border-top: 2px solid #ddd;
  }
  .delete {
    background: var(--right-child-background-color);
    color: var(--primary-font-color);
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    font-size: 0.5rem;
    padding: 0.2rem;
  }
  .delete:hover {
    color: red;
  }
  .body {
    .title {
      font-weight: 700;
    }
    .procedure {
      color: var(--light-font-color);
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.5rem;
    color: var(--light-font-color);
    div {
      border: 1px solid #ddd;
      background: #eee;
      padding: 0px 0.1rem;
      border-radius: 0.2rem;
      font-weight: 600;
    }
  }
`;
