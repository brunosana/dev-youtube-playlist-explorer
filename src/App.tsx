import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Playlist from './Pages/Playlists';
import Video from './Pages/Videos';

import Header from './Components/Header';

import GlobalStyle from './styles/Global';

const App: React.FC = () => {
    return (
    <>
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/playlists" component={Playlist} />
          <Route path="/videos" component={Video} />
        </Switch>
    </BrowserRouter>
    <GlobalStyle />
    </>
    );
};

export default App;
