import styled from "styled-components";

export default styled.main`
  display: grid;
  height: 100%;
  grid-template-rows: 5rem auto;
  .header {
    padding: 1rem;
  }
  .listing {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    height: auto;
    overflow: auto;
  }
  .card-item {
    flex: 1 1 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-weight: 700;
    }
    .procedure {
      color: var(--light-font-color);
    }
    .footer {
      display: flex;
      justify-content: space-between;
      font-size: 0.7rem;
      color: var(--light-font-color);
      padding: 1rem;
      div {
        border: 1px solid #ddd;
        background: #eee;
        padding: 0px 0.1rem;
        border-radius: 0.2rem;
        font-weight: 600;
        height: fit-content;
      }
    }
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
    width: 15rem;
    max-width: 20rem;
    height: 20rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    background: var(--event-background-color);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;
