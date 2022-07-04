import { Component } from "react";

class Center extends Component {
  render() {
    return (
        <section className={this.props.className}>
              {this.props.children}
        </section>
    )
  }
}

export default Center