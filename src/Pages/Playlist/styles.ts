import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    width: 100%;
    margin: 0 5%;
    input{
        flex: 1;
        height: 50px;
        border: none;
        border-radius: 13px 0 0 13px;
        padding: 0 15px;
    }

    button{
        border: none;
        width: 140px;
        background: #FF0000;
        color: #FFF;
        font-size: 20px;
        font-weight: bold;
        border-radius: 0 13px 13px 0;
        transition: color 0.2s, background 0.2s;
        &:hover {
            cursor: pointer;
            color: #FF0000;
            background: #FFF;
        }

    }

`;

export const Playlists = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 5%;
    margin-top: 80px;

    a{
        display: flex;
        text-decoration: none;
        color: #fff;
        background: #FF0000;
        align-items: center;
        padding: 10px 15px;
        border-radius: 13px;
        transition: transform 0.2s, background 0.2s;
        #videoIcon{
            margin-right: 20px;
        }
        #ClickIcon {
            margin-left: auto;
        }
        strong{
            font-size: 26px;
            span{
                font-size: 14px;
            }
        }
        p{
            margin: 0 auto;
            font-size: 14px;
        }

        &:hover{
            background: #af0404;
            transform: translateX(15px);
        }

        & + a {
            margin-top: 15px;
        }

    }

`;

export const Container = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 15px;
    justify-content: center;
    align-items: center;

    h1{
        display: flex;
        align-items: center;
        font-size: 45px;
        color: #FFF;
        margin: 0 5%;
        margin-top: 70px;
        margin-bottom: 20px;
        svg{
            margin-right: 8px;
        }
    }

`;

