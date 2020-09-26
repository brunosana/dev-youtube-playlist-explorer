import React, { FormEvent } from 'react';

import { Form, Container, PlaylistsContainer } from './styles';

import { AiFillYoutube, AiOutlineCaretRight } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const Playlists: React.FC = () => {

    async function handleShowPlaylist(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    return(
        <>
            <Container>
                <h1><AiFillYoutube size={55} /> Youtube Playlist Explorer</h1>
                <Form onSubmit={handleShowPlaylist}>
                    <input placeholder="Paste the playlist link here..." />
                    <button type="submit">Add</button>
                </Form>
                <PlaylistsContainer>
                    <Link to="/videos" >
                        <AiFillYoutube id="videoIcon" size={60} />
                        <div>
                            <strong>Playlist name <span>00:00s</span></strong>
                            <p>Description of the current playlist</p>
                        </div>
                        <AiOutlineCaretRight id="ClickIcon" size={30} />
                    </Link>
                    <Link to="/videos" >
                        <AiFillYoutube id="videoIcon" size={60} />
                        <div>
                            <strong>Playlist name <span>00:00s</span></strong>
                            <p>Description of the current playlist</p>
                        </div>
                        <AiOutlineCaretRight id="ClickIcon" size={30} />
                    </Link>
                    <Link to="/videos" >
                        <AiFillYoutube id="videoIcon" size={60} />
                        <div>
                            <strong>Playlist name <span>00:00s</span></strong>
                            <p>Description of the current playlist</p>
                        </div>
                        <AiOutlineCaretRight id="ClickIcon" size={30} />
                    </Link>
                    <Link to="/videos" >
                        <AiFillYoutube id="videoIcon" size={60} />
                        <div>
                            <strong>Playlist name <span>00:00s</span></strong>
                            <p>Description of the current playlist</p>
                        </div>
                        <AiOutlineCaretRight id="ClickIcon" size={30} />
                    </Link>
                    <Link to="/videos" >
                        <AiFillYoutube id="videoIcon" size={60} />
                        <div>
                            <strong>Playlist name <span>00:00s</span></strong>
                            <p>Description of the current playlist</p>
                        </div>
                        <AiOutlineCaretRight id="ClickIcon" size={30} />
                    </Link>
                    <Link to="/videos" >
                        <AiFillYoutube id="videoIcon" size={60} />
                        <div>
                            <strong>Playlist name <span>00:00s</span></strong>
                            <p>Description of the current playlist</p>
                        </div>
                        <AiOutlineCaretRight id="ClickIcon" size={30} />
                    </Link>
                </PlaylistsContainer>
            </Container>
        </>
    );
};

export default Playlists;
