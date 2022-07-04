import { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";


class Card extends Component {
    render() {
        return (
            <Wrapper>
              {this.props.children}
            <br />
            </Wrapper>
        )
    }
}

export default Card