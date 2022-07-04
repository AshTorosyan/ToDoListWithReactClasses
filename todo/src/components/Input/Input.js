import { Component } from "react";

class Input extends Component {
    render() {
        return (
            <input ref={this.props.myPropsRef} onChange={this.props.onChange} />
        )
    }
}

export default Input