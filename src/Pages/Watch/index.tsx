import React from 'react';
import YouTube, { Options } from 'react-youtube';
import { AiFillCaretRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { VideoContainer, ButtonArea } from './styles';

const Watch: React.FC = () => {
  const opts: Options = {
    width: '640',
    height: '390',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };

  return (
    <>
      <VideoContainer>
        <div id="videoArea">
          <Link id="back" to="/playlists">
            <AiOutlineArrowLeft size={20} />
            {' '}
            voltar
          </Link>
        </div>
        <div>
          <YouTube videoId="6qGwIn6t9gc" opts={opts} />
          <div id="videoName">
            <AiFillCaretRight size={30} />
            <h1>Video Name</h1>
          </div>
        </div>
        <ButtonArea>
          <button type="button">Next</button>
          <button type="button">Previous</button>
        </ButtonArea>
      </VideoContainer>
    </>
  );
};

export default Watch;
