import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container, TitleContainer } from './styles';

const Home: React.FC = () => (
  <>
    <Container>
      <TitleContainer>
        <AiFillYoutube size={120} />
        <div>
          <h1>Youtube Playlist Explorer</h1>
          <p>Store your playlists and explore them</p>
        </div>
      </TitleContainer>
      <Link to="/playlists">Start</Link>
    </Container>
  </>
);

export default Home;
