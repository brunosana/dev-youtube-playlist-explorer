import React from 'react';
import { AiFillYoutube, AiOutlineHome, AiOutlinePlayCircle } from 'react-icons/ai';

import { Nav } from './styles';

const Header: React.FC = () => {
    return (
        <Nav>
            <div>
                <a href="oi" ><AiOutlineHome size={16} /> Home</a>
                <a href="oi" ><AiOutlinePlayCircle size={16} /> Playlist</a>
            </div>
            <AiFillYoutube size={34} />
            <div>
                <input placeholder="Search video..." />
                <button>Search</button>
            </div>
        </Nav>
    );
};

export default Header;

//AiFillYoutube
//AiOutlineHome
//AiOutlinePlayCircle
//AiOutlineVideoCamera
