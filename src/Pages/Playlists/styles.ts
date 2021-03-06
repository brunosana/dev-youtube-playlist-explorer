import styled, { css } from 'styled-components';

interface FormProps{
    hasError: boolean;
}

export const Form = styled.form<FormProps>`
    display: flex;
    width: 100%;
    margin: 0 5%;
    input{
        flex: 1;
        height: 50px;
        border: none;
        ${(props) => props.hasError && css`border: 2px solid #FF0000;`}
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

export const PlaylistsContainer = styled.div`
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
        justify-content: start;
        padding: 10px 15px;
        border-radius: 13px;
        transition: transform 0.2s, background 0.2s;
        #videoIcon{
            margin-right: 20px;
        }
        #ClickIcon {
            margin-left: auto;
        }
        div{
            word-wrap: break-word;
            strong{
            font-size: 26px;
            text-overflow: ellipsis;
            span{
                font-size: 14px;
            }
        }
        }

        p{
            max-width: 60vw;
            font-size: 14px;
            word-wrap: break-word;
            text-overflow: ellipsis;
            overflow: hidden;
            overflow-wrap: break-word;
            white-space: pre-line;
        }

        &:hover{
            background: #af0404;
            transform: translateX(15px);
        }

        & + a {
            margin-top: 15px;
        }
        svg{
            width: auto !important;
            height: auto !important;
        }
    }

    @media (max-width: 1025px){
        a {
            div {
                strong {
                    font-size: 20px;
                }
            }
            svg{
                width: 50px;
            }
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

    @media (max-width: 654px){
        h1{
            font-size: 22px;
        }
    }

`;

export const Error = styled.span`
    width: 100%;
    color: #FF0000;
    font-size: 16px;
`;
