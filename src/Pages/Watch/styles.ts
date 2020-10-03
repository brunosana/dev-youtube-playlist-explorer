import styled from 'styled-components';

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 15px;
    margin-top: 100px;
    align-items: center;

    #back{
        width: 75px;
        display: flex;
        align-items: center;
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

    #videoArea{
        width: 100%;
        margin-bottom: 70px;
    }

    div{

        iframe{
            border: 7px solid #FF0000;
            border-radius: 13px;
            transition: border-color 0.2s;
            &:hover{
                border-color: #fff;
            }
        }

        #videoName{
        display: flex;
        align-items: center;
        justify-content: start;
        margin-top: 15px;
        h1{
        color: #fff;
        font-size: 30px;
        }
        svg{
            color: #fff;
            margin-left: -8px;
        }
    }
    }

    @media (max-width: 815px){
        div{
            iframe{
                max-width: 90vw;
                max-height: 30vh;
            }
        }
    }

`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    border: none;
    button {
        border: 0;
        border-radius: 30px;
        background: #FFF;
        margin-left: 10px;
        height: 70%;
        font-size: 25px;
        font-weight: bold;
        color: #252525;
        padding: 10px 20px;
        transition: color 0.2s, background 0.2s;

        &:hover {
            cursor: pointer;
            color: #FFF;
            background: #FF0000;
        }

    }
`;
