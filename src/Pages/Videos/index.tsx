import React from 'react';

import {
    AiFillCaretRight,
    AiOutlineFolderOpen,
    AiOutlineArrowLeft,
    AiOutlineCamera,
    AiOutlineLike,
    AiOutlineMessage,
    AiOutlineDislike,
    AiOutlineEye
} from 'react-icons/ai';
import { Container, Header, PlaylistInfo, VideoContainer } from './styles';

import { Link } from 'react-router-dom';

//AiOutlineLike
//AiOutlineEye
//AiOutlineMessage
//AiOutlineDislike


const Video: React.FC = () => {
    return(
        <>
            <Container>
                <Link id="back" to="/playlists">
                    <AiOutlineArrowLeft size={20} /> voltar
                </Link>
                <Header>
                    <AiFillCaretRight id="HeaderLogo" size={60} />
                    <div>
                        <h1>Playlist Name</h1>
                        <PlaylistInfo>
                            Description of the Playlist
                            <span>
                                <AiOutlineFolderOpen size={15} />
                                80 files
                            </span>
                        </PlaylistInfo>
                    </div>
                </Header>
                <VideoContainer>
                    <Link to="/watch" >
                        <AiFillCaretRight id="videoIcon" size={60} />
                        <div>
                            <strong>Video name <span>00:00s</span></strong>
                            <p>
                                <AiOutlineEye size={14} /> <span>16,000</span>
                                <AiOutlineLike size={14} /> <span>150</span>
                                <AiOutlineDislike size={14} /> <span>8</span>
                                <AiOutlineMessage size={14} /> <span>400</span>
                            </p>
                        </div>
                        <AiOutlineCamera id="ClickIcon" size={30} />
                    </Link>
                    <Link to="/watch" >
                        <AiFillCaretRight id="videoIcon" size={60} />
                        <div>
                            <strong>Video name <span>00:00s</span></strong>
                            <p>
                                <AiOutlineEye size={14} /> <span>16,000</span>
                                <AiOutlineLike size={14} /> <span>150</span>
                                <AiOutlineDislike size={14} /> <span>8</span>
                                <AiOutlineMessage size={14} /> <span>400</span>
                            </p>
                        </div>
                        <AiOutlineCamera id="ClickIcon" size={30} />
                    </Link>
                    <Link to="/watch" >
                        <AiFillCaretRight id="videoIcon" size={60} />
                        <div>
                            <strong>Video name <span>00:00s</span></strong>
                            <p>
                                <AiOutlineEye size={14} /> <span>16,000</span>
                                <AiOutlineLike size={14} /> <span>150</span>
                                <AiOutlineDislike size={14} /> <span>8</span>
                                <AiOutlineMessage size={14} /> <span>400</span>
                            </p>
                        </div>
                        <AiOutlineCamera id="ClickIcon" size={30} />
                    </Link>
                    <Link to="/watch" >
                        <AiFillCaretRight id="videoIcon" size={60} />
                        <div>
                            <strong>Video name <span>00:00s</span></strong>
                            <p>
                                <AiOutlineEye size={14} /> <span>16,000</span>
                                <AiOutlineLike size={14} /> <span>150</span>
                                <AiOutlineDislike size={14} /> <span>8</span>
                                <AiOutlineMessage size={14} /> <span>400</span>
                            </p>
                        </div>
                        <AiOutlineCamera id="ClickIcon" size={30} />
                    </Link>
                    <Link to="/watch" >
                        <AiFillCaretRight id="videoIcon" size={60} />
                        <div>
                            <strong>Video name <span>00:00s</span></strong>
                            <p>
                                <AiOutlineEye size={14} /> <span>16,000</span>
                                <AiOutlineLike size={14} /> <span>150</span>
                                <AiOutlineDislike size={14} /> <span>8</span>
                                <AiOutlineMessage size={14} /> <span>400</span>
                            </p>
                        </div>
                        <AiOutlineCamera id="ClickIcon" size={30} />
                    </Link>
                </VideoContainer>
            </Container>
        </>
    );
};

export default Video;
