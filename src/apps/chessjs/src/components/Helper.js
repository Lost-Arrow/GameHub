export const generateSlidingMoves = (chess, piece, begin, end, times) => {
  const directions = [
    -1, // left
    +1, // right
    -8, // up
    +8, // down
    -9, // up-left
    -7, // up-right
    +7, // down-left
    +9  // down-right
  ]

  const pieceFile = piece.position % 8;
  const pieceRank = 8 - 1 - parseInt(piece.position / 8);
  const moves = []
  
  for (let i = begin; i < end; ++i) {
    for (let j = 0; j < times; ++j) {
      // already on a border position where next move
      // will place the piece out of border
      if ((i === 0 && pieceFile === 0) ||
          (i === 1 && pieceFile === 7) ||
          (i === 2 && pieceRank === 7) ||
          (i === 3 && pieceRank === 0) ||
          (i === 4 && (pieceFile === 0 && pieceRank === 7)) ||
          (i === 5 && (pieceFile === 7 && pieceRank === 7)) ||
          (i === 6 && (pieceFile === 0 && pieceRank === 0)) ||
          (i === 7 && (pieceFile === 7 && pieceRank === 0)))
        break;
      
      const newPosition = piece.position + (j + 1) * directions[i];
      const newFile = newPosition % 8;
      const newRank = 8 - 1 - parseInt(newPosition / 8);

      // check if piece is still within bounds
      if (newPosition < 0 || newPosition >= 64)
        continue;
      
      // if a friendly piece is blocking us, we cannot go further as a sliding piece
      if ((piece.isWhite() && chess.isOccupiedByWhite(newPosition)) ||
          (piece.isBlack() && chess.isOccupiedByBlack(newPosition)))
        break;
      
      // all right, move is possible
      moves.push(newPosition);

      // if we've reached a file or rank that is at the border, the next move generation
      // in these cases will put us out of the board
      if ((i === 0 && newFile === 0) ||
          (i === 1 && newFile === 7) ||
          (i === 2 && newRank === 7) ||
          (i === 3 && newRank === 0) ||
          (i === 4 && (newFile === 0 || newRank === 7)) ||
          (i === 5 && (newFile === 7 || newRank === 7)) ||
          (i === 6 && (newFile === 0 || newRank === 0)) ||
          (i === 7 && (newFile === 7 || newRank === 0)))
        break;

      // if we've reached an enemy piece, we cannot move any further as a sliding piece
      // as the enemy must be captured
      if ((piece.isWhite() && chess.isOccupiedByBlack(newPosition)) ||
          (piece.isBlack() && chess.isOccupiedByWhite(newPosition)))
        break;
    }
  }

  return moves;
};

export const generateKnightMoves = (chess, piece) => {
  const primaryDirection = [
    -1, // left
    +1, // right
    -8, // up
    +8  // down
  ];

  const secondaryDirection = [
    [-8, +8], // up, down
    [-8, +8], // up, down
    [-1, +1], // left, right
    [-1, +1]  // left, right
  ];

  const pieceFile = piece.position % 8;
  const pieceRank = 8 - 1 - parseInt(piece.position / 8);
  const moves = [];

  for (let i = 0; i < 4; ++i) {
    if ((i === 0 && pieceFile < 2) ||
        (i === 1 && pieceFile > 5) ||
        (i === 2 && pieceRank > 5) ||
        (i === 3 && pieceRank < 2))
      continue;
    
    for (let j = 0; j < 2; ++j) {
      if ((i === 0 && ((pieceRank === 0 && j === 1) || (pieceRank === 7 && j === 0))) ||
          (i === 1 && ((pieceRank === 0 && j === 1) || (pieceRank === 7 && j === 0))) ||
          (i === 2 && ((pieceFile === 0 && j === 0) || (pieceFile === 7 && j === 1))) ||
          (i === 3 && ((pieceFile === 0 && j === 0) || (pieceFile === 7 && j === 1))))
        continue;
      
      const newPosition = piece.position + 2 * primaryDirection[i] + secondaryDirection[i][j];

      if (newPosition < 0 || newPosition >= 64 ||
         (piece.isWhite() && chess.isOccupiedByWhite(newPosition)) ||
         (piece.isBlack() && chess.isOccupiedByBlack(newPosition)))
        continue;
      
      moves.push(newPosition);
    }
  }

  return moves;
};

export const generatePawnMoves = (chess, piece) => {
  if (piece.isWhite()) {
    const direction = [
      -8, // up
      -9, // up-left
      -7  // up-right
    ];

    const moves = [];
    const pieceFile = piece.position % 8;
    const pieceRank = 8 - parseInt(piece.position / 8) - 1;

    for (let i = 0; i < 3; ++i) {
      if (pieceRank === 7)
        throw Error('white pawn cannot exist on the 8th rank');
      
      if ((i === 1 && pieceFile === 0) ||
          (i === 2 && pieceFile === 7))
        continue;
      
      const newPosition = piece.position + direction[i];
      
      if ((i === 0 && !chess.isOccupiedByWhite(newPosition) && !chess.isOccupiedByBlack(newPosition)) ||
         ((i === 1 || i === 2) && (chess.isOccupiedByBlack(newPosition) || chess.state.enPassantTarget === newPosition)))
        moves.push(newPosition);
    }

    if (pieceRank === 1) {
      const newPosition = piece.position + 2 * direction[0];
      const prePosition = piece.position + 1 * direction[0];
      
      if (chess.isOccupiedByWhite(newPosition) || chess.isOccupiedByBlack(newPosition) ||
          chess.isOccupiedByWhite(prePosition) || chess.isOccupiedByBlack(prePosition))
        return moves;
      
      moves.push(newPosition);
    }

    return moves;
  }
  else {
    const direction = [
      +8, // up
      +9, // up-left
      +7  // up-right
    ];

    const moves = [];
    const pieceFile = piece.position % 8;
    const pieceRank = 8 - parseInt(piece.position / 8) - 1;

    for (let i = 0; i < 3; ++i) {
      if (pieceRank === 0)
        throw Error('black pawn cannot exist on the 8th rank');
      
      if ((i === 1 && pieceFile === 7) ||
          (i === 2 && pieceFile === 0))
        continue;
      
      const newPosition = piece.position + direction[i];
      
      if ((i === 0 && !chess.isOccupiedByWhite(newPosition) && !chess.isOccupiedByBlack(newPosition)) ||
         ((i === 1 || i === 2) && (chess.isOccupiedByWhite(newPosition) || chess.state.enPassantTarget === newPosition)))
        moves.push(newPosition);
    }

    if (pieceRank === 6) {
      const newPosition = piece.position + 2 * direction[0];
      const prePosition = piece.position + 1 * direction[0];
      
      if (chess.isOccupiedByWhite(newPosition) || chess.isOccupiedByBlack(newPosition) ||
          chess.isOccupiedByWhite(prePosition) || chess.isOccupiedByBlack(prePosition))
        return moves;
      
      moves.push(newPosition);
    }

    return moves;
  }
};
