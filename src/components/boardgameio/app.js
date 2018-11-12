import React from 'react';
import { Client } from 'boardgame.io/react';
import CreativeColab from './game';
import Board from './board';

const App = Client({
  game: CreativeColab,
  board: Board,
  debug: true,
  multiplayer: { local: true },
});

const Singleplayer = () => (
  <div className="container" style={{ padding: 50 }}>
    <h1>CreativeColab</h1>
    <div>
      <div>
        <App gameID="multi" playerID="0" />
        &lt;App playerID=&quot;0&quot;/&gt;
      </div>
      <br />
      <br />
      <br />
      <div>
        <App gameID="multi" playerID="1" />
        &lt;App playerID=&quot;1&quot;/&gt;
      </div>
    </div>
  </div>
);

export default Singleplayer;
