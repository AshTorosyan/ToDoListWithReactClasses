import { Component } from "react";
import Wrapper from "./ui/Wrapper/Wrapper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {name: 'Narfioro', surname: 'Frielov', age: 32 , id: 1 },
        {name: "Ashot", surname: 'Torosyan', age: 26, id: 2},
        {name: "Garsia", surname: 'Todoer', age: 18, id: 3}
      ],
      idForNextUser: 4
    }
  }

  render() {
    return(
      <Wrapper>
        
      </Wrapper>
    )
  }
  


}

export default App