import React from "react";

import '../styles/Board.css'

class Box extends React.Component {
  render () {
    if (this.props.square.style !== null)
      return (
        <button
          className = {this.props.square.class}
          style = {this.props.square.style}
          onClick = {_ => this.props.square.onClick(this.props.square.piece)}
        />
      );
    else
      return (
        <button
          className = {this.props.square.class}
          onClick = {_ => this.props.square.onClick()}
        />
      );
  }
};

export default class Board extends React.Component {
  renderBox (i, j) {
    return <Box square = {this.props.squares[i * 8 + j]} key = {i * 8 + j} />;
  }

  render () {
    const board = [];

    for (let i = 0; i < 8; ++i) {
      const row = [];
      for (let j = 0; j < 8; ++j)
        row.push(this.renderBox(i, j));
      board.push(<div className = "board-row" key = {i}>{row}</div>);
    }

    return (
      <div className = "board">{board}</div>
    );
  }
};
