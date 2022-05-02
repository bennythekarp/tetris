import styled from 'styled-components';
// import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') #000;
    background-size: cover;
    overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`