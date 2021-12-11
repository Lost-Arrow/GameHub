import React from "react";

import { King, Queen, Bishop, Knight, Rook, Pawn } from "./Piece";

export class FENEditor extends React.Component {
  render () {
    return (
      <div className = "fen-editor">
        <input type = "text" size = {50} />
      </div>
    );
  }
};

export const parseFEN = (chess, fen) => {
  if (!validateFEN(fen))
    throw Error('Invalid FEN string!')
  
  const [placement, turn, castling, enPassant, halfMoves, fullMoves] = fen.split(' ')

  parsePlacement(chess, placement);
  parseTurn(chess, turn);
  parseCastling(chess, castling);
  parseEnPassant(chess, enPassant);

  chess.halfMoves = parseInt(halfMoves);
  chess.fullMoves = parseInt(fullMoves);
};

export const validateFEN = (fen) => {
  return (
    /\s*([rnbqkpRNBQKP1-8]+\/){7}([rnbqkpRNBQKP1-8]+)\s[bw-]\s(([a-hkqA-HKQ]{1,4})|(-))\s(([a-h][36])|(-))\s\d+\s\d+\s*/
      .test(fen)
  )
};

export const parsePlacement = (chess, placement) => {
  let file = 0;
  let rank = 0;
  let count = 0;

  for (let index in placement) {
    const character = placement[index];
    const position = 8 * rank + file;

    switch (character) {
      case '/':
        rank += 1;
        file = 0;
        break;
      
      case 'K': chess.state.white_pieces.get('king').push(new King(chess, 0, position)); ++file; ++count; break;
      case 'k': chess.state.black_pieces.get('king').push(new King(chess, 1, position)); ++file; ++count; break;

      case 'Q': chess.state.white_pieces.get('queen').push(new Queen(chess, 0, position)); ++file; ++count; break;
      case 'q': chess.state.black_pieces.get('queen').push(new Queen(chess, 1, position)); ++file; ++count; break;

      case 'N': chess.state.white_pieces.get('knight').push(new Knight(chess, 0, position)); ++file; ++count; break;
      case 'n': chess.state.black_pieces.get('knight').push(new Knight(chess, 1, position)); ++file; ++count; break;

      case 'B': chess.state.white_pieces.get('bishop').push(new Bishop(chess, 0, position)); ++file; ++count; break;
      case 'b': chess.state.black_pieces.get('bishop').push(new Bishop(chess, 1, position)); ++file; ++count; break;

      case 'R': chess.state.white_pieces.get('rook').push(new Rook(chess, 0, position)); ++file; ++count; break;
      case 'r': chess.state.black_pieces.get('rook').push(new Rook(chess, 1, position)); ++file; ++count; break;

      case 'P': chess.state.white_pieces.get('pawn').push(new Pawn(chess, 0, position)); ++file; ++count; break;
      case 'p': chess.state.black_pieces.get('pawn').push(new Pawn(chess, 1, position)); ++file; ++count; break;

      case '1': case '2': case '3': case '4':
      case '5': case '6': case '7': case '8':
        file += parseInt(character);
        count += parseInt(character);
        break;

      default: break;
    }

    if (file > 8)
      throw Error('Invalid FEN string!');
  }

  if (count !== 64)
    throw Error('Invalid FEN string!');
};

export const parseTurn = (chess, turn) => {
  chess.state.turn = turn === 'w' ? 0 : 1;
};

export const parseCastling = (chess, castling) => {
  for (let index in castling) {
    switch (castling[index]) {
      case 'K': chess.canWhiteCastleKingSide = true; break;
      case 'k': chess.canBlackCastleKingSide = true; break;
      case 'Q': chess.canWhiteCastleQueenSide = true; break;
      case 'q': chess.canBlackCastleQueenSide = true; break;
      case '-': break;
      default: break;
    }
  }
};

export const parseEnPassant = (chess, enPassant) => {
  if (enPassant === '-')
    chess.state.enPassantTarget = null;
  else
    chess.state.enPassantTarget = (8 - parseInt(enPassant[1])) * 8 + enPassant[0].charCodeAt() - 'a'.charCodeAt();
};
