import { Component } from "react";

class Input extends Component {
    render() {
        return (
            <input type={this.props.type} ref={this.props.myPropsRef} onChange={this.props.onChange} />
        )
    }
}

export default Input