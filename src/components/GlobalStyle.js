import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}
html{
    @media (max-width:1700px){
        font-size:80%;
    }
    @media (max-width:1300px){
        opacity:0;
    }
}


body{
    background:#ffffff;
    font-family: 'Inter', sans-serif;
}
button{
    font-weight:bold;
    background:#1E8BD8;
    font-size:1.2.rem;
    cursor:pointer;
    padding:1rem 2rem;
    border:3px solid #c4e2f6;
    color:#c4e2f6;
    transition:all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color:#196EAE;
        color:#c4e2f6;
    }
}
h2{
    font-weight:lighter;
    font-size:4rem;
}
h3{
    color:black;
}
h4{
    font-weight:bold;
}
p{
    padding:3rem 0rem;
    color:black;
    font-size:1.4rem;
    line-height:150%;
}
`;
export default GlobalStyle;
