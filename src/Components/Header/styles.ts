import styled, { css } from 'styled-components';

interface menuSideBarProps{
    showSidebar: boolean;
}

export const Nav = styled.nav<menuSideBarProps>`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 8px auto;
    padding: 0 15px;
    height: 34px;
    color: #FFF;

    #menuSideBar{
        display: none;
        background: none;
        height: 100%;
        align-items: center;
        margin: 0;
    }



    @keyframes slidein {
        0% {
            transform: translateX(-45vw);
        }

        100% {
            transform: translateX(0);
        }
    }
    @keyframes slideout {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-45vw);
        }
    }

    div{
        display: flex;
        height: 100%;
        align-items: center;
        a{
            display: flex;
            color: #FFF;
            align-items: center;
            text-decoration: none;
            font-size: 16px;
            transition: color 0.2s;
            svg{
                margin-right: 5px;
            }
            &:hover {
                cursor: pointer;
                color: #FF0000;
                svg {color: #FF0000;}
            }

            & + a {
                margin-left: 15px;
            }

        }
    }

    svg{
        color: #FFF;
        transition: color 0.2s;
        margin: 0 auto;

        &:hover {
            color: #FF0000;
        }
    }

    input {
        border: 0;
        border-radius: 12px;
        padding: 0 12px;
        font-size: 14px;
        height: 70%;
    }

    button {
        border: 0;
        border-radius: 12px;
        background: #FFF;
        margin-left: 10px;
        height: 70%;
        font-size: 14px;
        color: #252525;
        padding: 0 12px;
        transition: color 0.2s, background 0.2s;

        &:hover {
            cursor: pointer;
            color: #FFF;
            background: #FF0000;
        }

    }

    #menuSide{
        height: 100vh;
        width: 45vw;
        display: none;
        animation-duration: 0.4s;
        animation-name: slidein;
        position: absolute;
        background: #FF0000;
        margin: -15px;
        padding-top: 20vw;
        align-items: center;
        justify-content: start;
        z-index: 1;
        ${(props) => (props.showSidebar
            && css`
            display: flex;
            flex-direction: column;
            justify-content: start;
            a{
                font-size: 25px;
                & + a { margin-left: 0}
                &:hover{ color: #282828; svg{ color: #282828; } }
            }
            `)}
    }

    #menuSideFormBar{
        display: flex;
        flex-direction: column;
        input{
            margin-top: 20px;
            border: 0;
            border-radius: 12px;
            padding: 0 12px;
            font-size: 14px;
            height: 35px;
            width: 90%;
        }
        button {
        border: 0;
        border-radius: 12px;
        background: #FFF;
        margin-top: 20px;
        margin-left: 0;
        width: 90%;
        height: 35px;
        font-size: 14px;
        color: #252525;
        padding: 0 12px;
        transition: color 0.2s, background 0.2s;

        &:hover {
            cursor: pointer;
            color: #FFF;
            background: #FF0000;
        }
        }
    }

    @media (max-width: 555px){
        justify-content: start;
        #menuIconBar{
            display: none;
        }
        #menuFormBar{
            display: none;
        }
        #menuSideBar{
            display: flex;
            z-index: 2;
            ${(props) => props.showSidebar
            && css`
             &:hover{
                svg{color: #282828;}
            }`}

        }
    }

`;
