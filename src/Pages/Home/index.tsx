import React from 'react';
import { Container, TitleContainer } from './styles';
import { AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return(
        <>
            <Container>
                <TitleContainer>
                    <AiFillYoutube size={120} />
                    <div>
                        <h1>Youtube Playlist Explorer</h1>
                        <p>Store your playlists and explore them</p>
                    </div>
                </TitleContainer>
                <Link to="/playlist" >Start</Link>
            </Container>
        </>
    );
};

export default Home;
