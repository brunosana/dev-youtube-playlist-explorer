import React, { useEffect, useState } from 'react';

import { useRouteMatch, Link } from 'react-router-dom';

import {
  AiFillCaretRight,
  AiOutlineFolderOpen,
  AiOutlineArrowLeft,
  AiOutlineCamera,
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineDislike,
  AiOutlineEye,
} from 'react-icons/ai';

import {
  Container, Header, PlaylistInfo, VideoContainer, Loading,
} from './styles';

import GetVideosFromPlaylistService from '../../services/GetVideosFromPlaylistService';

interface VideoParams {
    id: string;
}

interface Playlist{
    id: string;
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnail?: string;
}

interface Video{
    id: string;
    videoid: string;
    title: string;
    description: string;
    channelTitle: string;
    channelId: string;
    thumb: string;
}

const Video: React.FC = () => {
  const [playlists] = useState<Playlist[]>(() => {
    const storagedItems = localStorage.getItem('@YoutubePlaylistExplorer::playlists');
    if (storagedItems) {
      return JSON.parse(storagedItems);
    }
    return [];
  });

  const [playlist, setPlaylist] = useState<Playlist>();

  const [videos, setVideos] = useState<Video[]>([]);

  const [status, setStatus] = useState('Loading...');

  const { params } = useRouteMatch<VideoParams>();

  useEffect(() => {
    const playlistID = playlists.findIndex((play) => play.id === params.id);
    if (playlistID >= 0) {
      setPlaylist(playlists[playlistID]);
      const getVideosFromPlaylistService = new GetVideosFromPlaylistService();
      getVideosFromPlaylistService.execute(playlists[playlistID].id).then((response) => {
        if (response) {
          setVideos(response.videos);
        } else {
          setStatus('Internal error');
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <Link id="back" to="/playlists">
          <AiOutlineArrowLeft size={20} />
          {' '}
          voltar
        </Link>
        {playlist
            && (
            <Header>
              <AiFillCaretRight id="HeaderLogo" size={60} />
              <div>
                <h1>{playlist.title}</h1>
                <PlaylistInfo>
                  {`${playlist.description.substr(0, 25)}...`}
                  <span>
                    <AiOutlineFolderOpen size={15} />
                    {videos ? videos.length : 'n/a'}
                    {' '}
                    files
                  </span>
                </PlaylistInfo>
              </div>
            </Header>
            )}
        <VideoContainer>
          {playlist
            && videos.length > 0
            ? videos.map((video) => (
              <Link to={`/watch/${playlist.id}/${video.videoid}`}>
                <AiFillCaretRight id="videoIcon" size={60} />
                <div>
                  <strong>
                    {video.title}
                  </strong>
                  <p>
                    <AiOutlineEye size={14} />
                    {' '}
                    <span>16,000</span>
                    <AiOutlineLike size={14} />
                    {' '}
                    <span>150</span>
                    <AiOutlineDislike size={14} />
                    {' '}
                    <span>8</span>
                    <AiOutlineMessage size={14} />
                    {' '}
                    <span>400</span>
                  </p>
                </div>
                <AiOutlineCamera id="ClickIcon" size={30} />
              </Link>
            ))
            : <Loading>{status}</Loading>}
        </VideoContainer>

      </Container>
    </>
  );
};

export default Video;
