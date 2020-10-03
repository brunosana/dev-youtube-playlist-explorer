import React, { useState, useEffect } from 'react';
import YouTube, { Options } from 'react-youtube';
import { AiFillCaretRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useRouteMatch } from 'react-router-dom';
import { VideoContainer, ButtonArea } from './styles';

interface VideoParams{
    id: string;
    playlistid: string;
}

interface Playlist{
    id: string;
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnail?: string;
}

const Watch: React.FC = () => {
  const [playlists] = useState<Playlist[]>(() => {
    const storagedItems = localStorage.getItem('@YoutubePlaylistExplorer::playlists');
    if (storagedItems) {
      return JSON.parse(storagedItems);
    }
    return [];
  });

  const [playlist, setPlaylist] = useState<Playlist>();

  const { params } = useRouteMatch<VideoParams>();

  useEffect(() => {
    const playlistID = playlists.findIndex((play) => play.id === params.playlistid);
    if (playlistID >= 0) {
      setPlaylist(playlists[playlistID]);
    }
    // eslint-disable-next-line
  }, []);

  const opts: Options = {
    width: '640',
    height: '390',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };

  const videoID = params.id;

  return (
    <>
      <VideoContainer>
        <div id="videoArea">
          { playlist && (
          <Link id="back" to={`/videos/${playlist.id}`}>
            <AiOutlineArrowLeft size={20} />
            {' '}
            voltar
          </Link>
          )}
        </div>
        <div>
          <YouTube videoId={videoID} opts={opts} />
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
