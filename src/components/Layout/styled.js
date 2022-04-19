import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

export default createGlobalStyle`
    html, body {
        border: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-family: "Noto Sans KR Regular", sans-serif;
    }

    *,
    :after,
    :before {
        box-sizing:border-box;
    }
`;
