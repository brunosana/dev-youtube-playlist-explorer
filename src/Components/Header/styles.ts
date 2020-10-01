import styled from 'styled-components';

export const Nav = styled.nav`
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
        }
    }

`;
