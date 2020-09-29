import React, { FormEvent, useState, useEffect } from 'react';

import { AiFillYoutube, AiOutlineCaretRight } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import {
  Form, Container, PlaylistsContainer, Error,
} from './styles';

import AddPlaylistService from '../../services/AddPlaylistService';

interface Playlist{
    id: string;
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnail?: string;
}

const Playlists: React.FC = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [playlists, setPlaylists] = useState<Playlist[]>(() => {
    const storagedItems = localStorage.getItem('@YoutubePlaylistExplorer::playlists');
    if (storagedItems) {
      return JSON.parse(storagedItems);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@YoutubePlaylistExplorer::playlists',
      JSON.stringify(playlists));
  }, [playlists]);

  async function handleShowPlaylist(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const addPlaylistService = new AddPlaylistService();
    try {
      const result = await addPlaylistService.execute(url);
      const newPlaylist: Playlist = {
        channelId: result.channelId,
        channelTitle: result.channelTitle,
        description: result.description,
        id: result.id,
        title: result.title,
        thumbnail: result.thumbnail,
      };
      setPlaylists([...playlists, newPlaylist]);
      setError('');
    } catch (err) {
      setError(err.message);
    }
    setUrl('');
  }

  return (
    <>
      <Container>
        <h1>
          <AiFillYoutube size={55} />
          {' '}
          Youtube Playlist Explorer
        </h1>
        <Form hasError={!!error} onSubmit={handleShowPlaylist}>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste the playlist link here..."
          />
          <button type="submit">Add</button>
        </Form>
        { error && <Error>{error}</Error>}
        <PlaylistsContainer>
          {playlists.map((playlist) => (
            <Link to="/videos">
              <AiFillYoutube id="videoIcon" size={60} />
              <div>
                <strong>
                  {playlist.title}
                </strong>
                <p>{playlist.description}</p>
              </div>
              <AiOutlineCaretRight id="ClickIcon" size={30} />
            </Link>
          ))}
        </PlaylistsContainer>
      </Container>
    </>
  );
};

export default Playlists;
