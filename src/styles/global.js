import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
}

:root{
    --Color-primary: #FF577F;
    --Color-primary-Focus:#FF427F;
    --Color-primary-Negative:#59323F;
    --Grey-0: #F8F9FA;
    --Grey-1: #868E96; 
    --Grey-2: #343B41;
    --Grey-3: #212529;
    --Grey-4: #121214;
    --red: #c53030
}

body{
    background: var(--Grey-4);
    color: var(--Grey-0);
}

body,input, button{
    font-family: 'Inter', sans-serif;
    font-size: 1rem
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Inter', sans-serif;
    font-weight:700
}

button{
    cursor: pointer;
}

a{
    text-decoration: none
}

`;
