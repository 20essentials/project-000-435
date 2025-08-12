import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { css, createGlobalStyle } from "@acab/ecsstatic";

createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    place-content: center;
  }
  @keyframes reflex {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const curveTop = css`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80vh;
  background: linear-gradient(90deg, #62dab4, #10bed4);
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
  transform: scaleX(1.5);
  overflow: hidden;
  @media (width <= 1111px) and (orientation: portrait) {
    height: 50vh;
  }
  &:hover {
    &::before {
      animation: reflex 0.6s ease-in-out;
    }
  }
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: -100%;
    top: 0;
    background-image: linear-gradient(to right, transparent, #fff8, transparent);
  }
`;

function App() {
  return <section className={curveTop}></section>;
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
