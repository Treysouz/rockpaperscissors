import React, { Component } from "react";
import PlayerCard from "./PlayerCard";

export default class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "scissors", "paper"];
    this.state = {
      playerOne: "",
      playerTwo: "",
      winner: "",
      results: ""
    };
  }
  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)]
    });
  };

  decideWinner = () => {
    if (
      this.state.playerOne === "rock" &&
      this.state.playerTwo === "scissors"
    ) {
      this.setState({
        winner: "Player One Wins!",
        results: "Rock beats Scissors"
      });
    } else if (
      this.state.playerTwo === "rock" &&
      this.state.playerOne === "scissors"
    ) {
      this.setState({
        winner: "Player Two Wins!",
        results: "Rock beats Scissors"
      });
    } else if (
      this.state.playerTwo === "paper" &&
      this.state.playerOne === "scissors"
    ) {
      this.setState({
        winner: "Player Two Wins!",
        results: "Scissors beats Paper"
      });
    } else if (
      this.state.playerOne === "paper" &&
      this.state.playerTwo === "scissors"
    ) {
      this.setState({
        winner: "Player One Wins!",
        results: "Scissors beats Paper"
      });
    } else if (
      this.state.playerOne === "rock" &&
      this.state.playerTwo === "paper"
    ) {
      this.setState({
        winner: "Player Two Wins!",
        results: "Paper beats Rock"
      });
    } else if (
      this.state.playerTwo === "rock" &&
      this.state.playerOne === "paper"
    ) {
      this.setState({
        winner: "Player Two Wins!",
        results: "Paper beats Rock"
      });
    } else if (this.state.playerTwo === this.state.playerOne) {
      this.setState({
        winner: "No Winner",
        results: "It's a Draw!"
      });
    } else {
      this.setState({
        winner: "No Winner",
        results: "There was an Error"
      });
    }
  };

  render() {
    return (
      <main>
        <section className="playCardContainer">
          <PlayerCard sign={this.state.playerOne}></PlayerCard>
          <PlayerCard sign={this.state.playerTwo}></PlayerCard>
        </section>
        <section className="playInfoContainer">
          <p>{this.state.results}</p>
          <p>{this.state.winner}</p>
        </section>
        <section className="playBtnContainer">
          <button type="button" onClick={this.playGame}>
            Play the Game
          </button>
        </section>
      </main>
    );
  }
}
