import { Component } from "react";

class Inlinetext extends Component {
    render() {
        return (
            <span className={this.props.className}> {this.props.children} </span>
        )
    }
}

export default Inlinetext