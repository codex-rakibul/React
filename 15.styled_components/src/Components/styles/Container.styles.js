import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat',sens-serif;
    background: #262626;
    width: 100%;
    height: 100vh;
`;

export const CardContainer = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    background: #1e1e1e;
    width: 100%;
    height: 350px;
    align-items: center;
`;
export const ContentContainer = styled.div`
    width:215px;
    position: absolute;
    left: 0;
    z-index: 3;
`;
