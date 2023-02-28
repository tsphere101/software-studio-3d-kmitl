import React, { useState } from "react";
function Card(props) {
    const { card } = props;

    let [votes, setVotes] = useState(0);

    function onVote() {
        if (votes >= 10) {
            alert("Cannot Vote more");
            return;
        }
        setVotes(votes + 1);
    }

    function onUnvote() {
        if (votes <= 0) {
            alert("Cannot unvote");
            return;
        }
        setVotes(votes - 1);
    }

    let score = votes;
    if (votes == 0) {
        score = "MIN";
    } else if (votes >= 10) {
        score = "MAX";
    }

    return (
        <div className="container">
            <div className="card">
                <div className="text-center h3 mt-4">{card.title}</div>
                <div className="row justify-content-center">
                    <div className="col-sm-7 p-5">{card.body}</div>
                    <div className="col-sm-5">
                        <img
                            src={card.image}
                            alt="food"
                            className="img-fluid p-5"
                        />
                    </div>

                    <button className="btn btn-primary m-2" onClick={onVote}>
                        Vote
                    </button>

                    <div className="btn col-sm-1 m-2">{score}</div>

                    <button className="btn btn-danger m-2" onClick={onUnvote}>
                        Unvote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
