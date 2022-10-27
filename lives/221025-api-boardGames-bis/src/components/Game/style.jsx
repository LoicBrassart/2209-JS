import styled from "styled-components";

export default styled.li`
  article {
    width: 15rem;
    aspect-ratio: 2;
    border: 1px solid rgba(150, 150, 150, 0.75);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    position: relative;
    margin: 3rem;
    padding: 0.5rem;

    img {
      width: 3rem;
      position: absolute;
      top: -2rem;
      right: -2rem;
    }

    .flexer {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  }
`;
