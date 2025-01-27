import styled from 'styled-components';


export const AppContainer = styled.div`
    display: block;
`;

export const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
`;

export const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const AppLink = styled.a`
    color: #61dafb;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px;
    justify-content: space-between;
    justify-self: center;

    > div {     
        margin: 10px;
    }
`;

  