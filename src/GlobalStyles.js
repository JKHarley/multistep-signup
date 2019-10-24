import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`    
    html {
        font-size: 62.5%;
        box-sizing: border-box;

        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to bottom right, #2193b0, #6dd5ed);
            overflow-y: hidden;
            padding: 0;
            margin: 0;
            
            p {
                margin: 0;
            }
        }
    }
`;
