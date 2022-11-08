import styled from "styled-components";

export default styled.section`
  header {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  input {
    width: 20rem;
    display: block;
  }

  ul {
    width: 20rem;
    max-height: 15rem;
    overflow-y: scroll;
    margin: 0;
    padding: 0;
    position: absolute;
    border: 2px dotted yellowgreen;
    background-color: white;
  }

  li {
    padding: 1rem;

    &:nth-child(2n + 1) {
      background-color: rgba(240, 240, 240, 1);
    }
  }

  .hidden {
    display: none;
  }
`;
