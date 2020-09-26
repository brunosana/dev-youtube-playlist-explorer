import React from 'react';
import { AiFillYoutube, AiOutlineHome, AiOutlinePlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Nav } from './styles';

const Header: React.FC = () => {
    return (
        <Nav>
            <div>
                <Link to="/" ><AiOutlineHome size={16} /> Home</Link>
                <Link to="/playlist" ><AiOutlinePlayCircle size={16} /> Playlist</Link>
            </div>
            <AiFillYoutube id="logo" size={34} />
            <div>
                <input placeholder="Search video..." />
                <button>Search</button>
            </div>
        </Nav>
    );
};

export default Header;
