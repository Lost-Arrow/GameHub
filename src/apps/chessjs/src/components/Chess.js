import React from "react";

import { parseFEN } from "./FEN";
import Board from "./Board";

const Dict = require('collections/dict')

export default class Chess extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      white_pieces: new Dict({
        king: [],
        queen: [],
        bishop: [],
        knight: [],
        rook: [],
        pawn: []
      }),

      black_pieces: new Dict({
        king: [],
        queen: [],
        bishop: [],
        knight: [],
        rook: [],
        pawn: []
      }),

      turn: 0,

      fen: this.props.fen,

      enPassantTarget: null,

      canWhiteCastleKingSide: false,
      canBlackCastleKingSide: false,
      canWhiteCastleQueenSide: false,
      canBlackCastleQueenSide: false,

      selectedPiece: null
    };

    this.initialiseFromFEN();

    this.onPieceClick = this.onPieceClick.bind(this);
    this.onEmptyBoxClick = this.onEmptyBoxClick.bind(this);
  }

  initialiseFromFEN () {
    parseFEN(this, this.props.fen);
  }

  isOccupiedByBlack (position) {
    return this.state.black_pieces.valuesArray()
      .map(piece_type => 
        piece_type.map(piece => 
          piece.position === position
        ).sum()
      ).sum();
  }

  isOccupiedByWhite (position) {
    return this.state.white_pieces.valuesArray()
      .map(piece_type => 
        piece_type.map(piece => 
          piece.position === position
        ).sum()
      ).sum();
  }

  onPieceClick (piece) {
    if (this.state.turn !== piece.color)
      return;
    
    this.setState({
      selectedPiece: piece
    });
  }

  onEmptyBoxClick () {
    this.setState({
      selectedPiece: null
    });
  }

  getSquares () {
    const squares = [];
    for (let i = 0; i < 8; ++i)
      for (let j = 0; j < 8; ++j)
        squares.push({
          class: "square " + ["light-square", "dark-square"][(i + j) % 2],
          style: null,
          onClick: this.onEmptyBoxClick,
          piece: null
        });
    
    this.state.white_pieces.valuesArray().forEach(
      piece_type => piece_type.forEach(
        piece => {
          const square = squares[piece.position];

          square.style = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: piece.url
          }
          square.onClick = this.onPieceClick;
          square.piece = piece;
        }
      )
    )

    this.state.black_pieces.valuesArray().forEach(
      piece_type => piece_type.forEach(
        piece => {
          const square = squares[piece.position];

          square.style = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: piece.url
          }
          square.onClick = this.onPieceClick;
          square.piece = piece;
        }
      )
    )

    if (this.state.selectedPiece) {
      squares[this.state.selectedPiece.position].class += " selected-square";

      const moves = this.state.selectedPiece.generateMoves();
      for (let index in moves) {
        squares[moves[index]].class += " attacked-square";
      }
    }

    return squares;
  }

  render () {
    const squares = this.getSquares();

    return (
      <div className = "chess">
        <Board squares = {squares} />
      </div>
    )
  }
};
