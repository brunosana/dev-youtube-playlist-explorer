import React from 'react';
import {
  AiFillYoutube, AiOutlineHome, AiOutlinePlayCircle, AiOutlineBars,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Nav } from './styles';

const Header: React.FC = () => (
  <Nav>
    <button type="button" id="menuSideBar">
      <AiOutlineBars size={25} />
    </button>
    <div id="menuIconBar">
      <Link to="/">
        <AiOutlineHome size={16} />
        {' '}
        Home
      </Link>
      <Link to="/playlists">
        <AiOutlinePlayCircle size={16} />
        {' '}
        Playlist
      </Link>
    </div>
    <AiFillYoutube id="logo" size={34} />
    <div id="menuFormBar">
      <input placeholder="Search video..." />
      <button type="button">Search</button>
    </div>
  </Nav>
);

export default Header;
