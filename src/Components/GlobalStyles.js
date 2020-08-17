import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: 'GmarketSansBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    }
    html, body, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    body {
        font-family: 'GmarketSansBold';
        font-weight: normal;
        font-style: normal;
    }
    


`;

export default globalStyles;
