import React from 'react'

import Chess from './components/Chess.js'
import { FENEditor } from './components/FEN.js';

export default class App1 extends React.Component {
  constructor () {
    super();
    this.state = {
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
    }
  }

  render () {
    return (
      <div className = "app">
        <div className = "fen-editor-app">
          <FENEditor />
        </div>

        <div className = "chess-app">
          <Chess fen = "rn2kb1r/ppp1pppp/1q3n2/8/3P2b1/2N2N2/PPPBBPPP/R2QK2R b KQkq - 6 7" />
        </div>
      </div>
    );
  }
}
