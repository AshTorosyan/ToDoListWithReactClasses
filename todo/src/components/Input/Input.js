import { Component } from "react";

class Input extends Component {
    render() {
        return (
            <input ref={this.props.ref} onChange={this.props.onChange} />
        )
    }
}

export default Input