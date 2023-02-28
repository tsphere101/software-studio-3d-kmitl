import React from "react";

class VoteButton extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.props.parentCallback(this.props.value);
    }

    render() {
        return <button className={this.props.className} onClick={this.onClick}>{this.props.text}</button>;
    }
}

export default VoteButton;
