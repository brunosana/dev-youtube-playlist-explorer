import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Playlist from './Pages/Playlists';
import Video from './Pages/Videos';
import Watch from './Pages/Watch';

import Header from './Components/Header';

import GlobalStyle from './styles/Global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/playlists" component={Playlist} />
        <Route path="/videos" component={Video} />
        <Route path="/watch" component={Watch} />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
