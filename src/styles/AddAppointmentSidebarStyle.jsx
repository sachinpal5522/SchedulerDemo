import styled from "styled-components";

export default styled.section`
  position: absolute;
  width: 20rem;
  top: 0px;
  right: 0px;
  background: #0000003f;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    background: var(--left-child-background-color);
    border-radius: 0.5rem;
    padding: 1rem;
    position: relative;

    .close-btn {
      background: var(--right-child-background-color);
      color: var(--primary-font-color);
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
    }
    h1 {
      margin-bottom: 2rem;
    }

    form {
      display: grid;
      grid-template-columns: 20rem;
      grid-row-gap: 1rem;

      input,
      select {
        border: 1px solid #ddd;
        padding: 0.5rem;
        border-radius: 0.2rem;
      }

      .loading-icon {
        animation: animate 2s infinite;
        margin-right: 0.5rem;
      }

      @keyframes animate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(720deg);
        }
      }
    }
  }
`;
