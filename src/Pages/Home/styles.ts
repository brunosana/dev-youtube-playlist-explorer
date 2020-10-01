import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 800px;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 15px;
    color: #FFF;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 50px;
    }

    a{
        font-size: 25px;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        width: 300px;
        height: 50px;
        align-items: center;
        justify-content: center;
        color: #FFF;
        background: #FF0000;
        border-radius: 25px;
        margin-top: 35px;

        transition: color 0.2s, background 0.2s;

        &:hover{
            color: #FF0000;
            background: #FFF;
        }

    }

    @media (max-width: 728px){
        h1{
            font-size: 22px;
        }
        p{
            font-size: 14px;
        }
        a{
            font-size: 20px;
            width: 200px;
            height: 45px;
        }
    }

`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    transition: color 0.2s;

    svg{
        margin-right: 10px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

`;
