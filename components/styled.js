import styled from "styled-components";

export const Container = styled.div`
  padding-top: clamp(8rem, 9rem, 10rem);
  width: 100%;
  min-height: 60vh;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Main = styled.div`
  width: 100%;
  min-height: 70vh;
`;

export const SubLine = styled.div`
  width: 100%;
  height: 0.5rem;
  position: relative;
  transition: all 0.2s ease-in-out;
  margin: 2rem 0;

  ::before {
    content: " ";
    width: 0;
    height: 100%;
    transition: all 0.5s ease-in-out;
    position: absolute;
    background-color: var(--secondary);
    top: 0;
    left: 0;
    bottom: 0;
    animation: subline 3s ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes subline {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
