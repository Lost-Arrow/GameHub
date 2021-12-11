import { generateKnightMoves, generatePawnMoves, generateSlidingMoves } from './Helper'

import white_king   from '../resources/white_king.png'
import black_king   from '../resources/black_king.png'
import white_queen  from '../resources/white_queen.png'
import black_queen  from '../resources/black_queen.png'
import white_bishop from '../resources/white_bishop.png'
import black_bishop from '../resources/black_bishop.png'
import white_knight from '../resources/white_knight.png'
import black_knight from '../resources/black_knight.png'
import white_rook   from '../resources/white_rook.png'
import black_rook   from '../resources/black_rook.png'
import white_pawn   from '../resources/white_pawn.png'
import black_pawn   from '../resources/black_pawn.png'

class Piece {
  constructor (chess, color, image, position = -1) {
    this.chess = chess;

    /* The color of the piece
       0: white
       1: black
    */
    if (color !== 0 && color !== 1)
      throw Error('Color can only take values {0, 1}!')
    this.color = color;

    /* The piece image url */
    this.url = 'url(' + image + ')';

    /* The position of the piece */
    this.position = position;
  }

  isWhite () {
    return this.color === 0;
  }

  isBlack () {
    return this.color === 1;
  }
};

export class King extends Piece {
  constructor (chess, color, position) {
    super(chess, color, color === 0 ? white_king : black_king, position);
  }

  generateMoves () {
    return generateSlidingMoves(this.chess, this, 0, 8, 1);
  }
};

export class Queen extends Piece {
  constructor (chess, color, position) {
    super(chess, color, color === 0 ? white_queen : black_queen, position);
  }

  generateMoves () {
    return generateSlidingMoves(this.chess, this, 0, 8, 8);
  }
}

export class Bishop extends Piece {
  constructor (chess, color, position) {
    super(chess, color, color === 0 ? white_bishop : black_bishop, position);
  }

  generateMoves () {
    return generateSlidingMoves(this.chess, this, 4, 8, 8);
  }
}

export class Knight extends Piece {
  constructor (chess, color, position) {
    super(chess, color, color === 0 ? white_knight : black_knight, position);
  }

  generateMoves () {
    return generateKnightMoves(this.chess, this);
  }
}

export class Rook extends Piece {
  constructor (chess, color, position) {
    super(chess, color, color === 0 ? white_rook : black_rook, position);
  }

  generateMoves () {
    return generateSlidingMoves(this.chess, this, 0, 4, 8);
  }
}

export class Pawn extends Piece {
  constructor (chess, color, position) {
    super(chess, color, color === 0 ? white_pawn : black_pawn, position);
  }

  generateMoves () {
    return generatePawnMoves(this.chess, this);
  }
}
