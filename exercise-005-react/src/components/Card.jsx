import React, { useState } from "react";
import VoteButton from "./VoteButton";
import "./Card.css"

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        };
    }

    onVote = () => {
        let score = this.state.score;
        if (score >= 10) {
            alert("Cannot Vote more");
            return;
        }
        this.setState({ score: this.state.score + 1 });
    };

    onUnvote = () => {
        let score = this.state.score;
        if (score <= 0) {
            alert("Cannot Unvote more");
            return;
        }
        this.setState({ score: this.state.score - 1 });
    };

    updateScore = (score) => {
        if (this.state.score + score < 0) {
            alert("Cannot Unvote more");
            return;
        }
        if (this.state.score + score > 10) {
            alert("Cannot Vote more");
            return;
        }
        this.setState({ score: score + this.state.score });
    }

    scoreDisplay() {
        let score = this.state.score;

        if (score >= 10) {
            return "MAX";
        } else if (score <= 0) {
            return "MIN";
        }
        return score;
    }

    render() {
        return (
            <div className="container card">
                    <div className="h3 mt-4 mx-2">
                        {this.props.card.title}
                    </div>
                    <div className="h6 mt-4 mx-2">
                        {this.props.card.subtitle}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-7 p-5">
                            {this.props.card.body}
                        </div>
                        <div className="col-sm-5">
                            <img
                                src={this.props.card.image}
                                alt="food"
                                className="img-fluid p-5"
                            />
                        </div>


                        <VoteButton
                            parentCallback={this.updateScore}
                            text="Click to Vote"
                            className="vote-btn"
                            value={1}
                        />

                        <div className="score">
                            {this.scoreDisplay()}
                        </div>

                        <VoteButton
                            parentCallback={this.updateScore}
                            text="Click to Unvote"
                            className="vote-btn"
                            value={-1}
                        />
                    </div>
                </div>
        );
    }
}
export default Card;
