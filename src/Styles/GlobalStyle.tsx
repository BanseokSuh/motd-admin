import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    *, *::before, *::after{
        box-sizing: border-box;
    }
    html{
        font-size: 1vw;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
                                
    body{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1rem;
        color: #333;
        line-height: 1.5;
        overflow-y: auto;
        max-height: 100%;
    }
`;