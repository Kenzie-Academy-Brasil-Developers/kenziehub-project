import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        --color-white: #fff;
        
        --color-overlay-grey-0: rgba(18, 18, 20, 0.5);
        
        --color-success: #3FE864;
        --color-negative: #E83F5B;
        
        --toastify-color-success: var(--color-primary) !important;

        --font-family: 'Inter', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-family);
        background-color: var(--color-grey-4);
        color: var(--color-grey-0);
    }

    li,
    a {
        list-style: none;
        text-decoration: none;
    }
`;