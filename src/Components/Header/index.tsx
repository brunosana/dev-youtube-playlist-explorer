import React, { useState } from 'react';
import {
  AiFillYoutube, AiOutlineHome, AiOutlinePlayCircle, AiOutlineBars, AiOutlineCloseCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Nav } from './styles';

const Header: React.FC = () => {
  const [showSidebar, setShowSideBar] = useState(false);

  function handleShowSideBar() {
    setShowSideBar(!showSidebar);
  }

  return (
    <Nav showSidebar={showSidebar}>
      <button type="button" id="menuSideBar" onClick={handleShowSideBar}>
        {showSidebar
          ? <AiOutlineCloseCircle size={25} />
          : <AiOutlineBars size={25} />}
      </button>
      <div id="menuSide">
        <Link onClick={handleShowSideBar} to="/">
          Home
        </Link>
        <Link onClick={handleShowSideBar} to="/playlists">
          Playlist
        </Link>
        <div id="menuSideFormBar">
          <input placeholder="Search video..." />
          <button type="button">Search</button>
        </div>
      </div>
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
};

export default Header;
