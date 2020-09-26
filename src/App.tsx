import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Playlist from './Pages/Playlist';
import Video from './Pages/Video';

import Header from './Components/Header';

import GlobalStyle from './styles/Global';

const App: React.FC = () => {
    return (
    <>
    <Header />
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/video" component={Video} />
        </Switch>
    </BrowserRouter>
    <GlobalStyle />
    </>
    );
};

export default App;
