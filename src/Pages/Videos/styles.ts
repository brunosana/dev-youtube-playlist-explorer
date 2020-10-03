import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 15px;
    margin-top:80px;


    #back{
        width: 75px;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        font-size: 20px;
        transition: color 0.2s;
        text-decoration: none;
        color: #fff;
        svg{
            margin-right: 5px;
        }

        &:hover{
            color: #FF0000;
            cursor: pointer;
        }
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #FFF;
    color: #252525;
    border-radius: 13px;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-wrap: break-word;
    white-space: pre-line;
    h1 {
        font-size: 30px;
    }
    #HeaderLogo{
        margin-right: 5px;
    }

    @media (max-width: 1025px){
        h1 {
            font-size: 20px;
        }
    }
`;

export const PlaylistInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    span{
        align-items: center;
        svg{
            margin-left: 15px;
            margin-right: 5px;
        }
    }
`;

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
        div{
            word-wrap: break-word;
            text-overflow: ellipsis;
            overflow: hidden;
            overflow-wrap: break-word;
            white-space: pre-line;
            strong{
                font-size: 26px;
                span{
                    font-size: 14px;
                }
            }
            p{
                display: flex;
                align-items: center;
                margin: 0 auto;
                span{
                    font-size: 14px;
                    margin-right: 15px;
                }
            }
        }
        svg{
            width: auto !important;
            height: auto !important;
        }

        &:hover{
            background: #af0404;
            transform: translateX(15px);
        }

        & + a {
            margin-top: 15px;
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

export const Loading = styled.div`
    color: #fff;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 15px;
    margin-top:100px;
    font-size: 35px;

    @keyframes colorAnimation {
    0% {color: #fff; font-size: 35px;}
    50% {color: #bbb; font-size: 36px; }
    100% {color: #fff; font-size: 35px; }
    }
    animation-name: colorAnimation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
`;
