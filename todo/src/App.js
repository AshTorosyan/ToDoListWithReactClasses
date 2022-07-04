import React, { Component } from "react";
import Button from "./components/Button/Button";
import Inlinetext from "./components/Inlinetext/Inlinetext";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import Listitem from "./components/Listitem/Listitem";
import Wrapper from "./ui/Wrapper/Wrapper";
import Card from "./ui/Card/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {name: 'Narfioro', surname: 'Frielov', age: 32 , id: 1 },
        {name: "Ashot", surname: 'Torosyan', age: 26, id: 2},
        {name: "Garsia", surname: 'Todoer', age: 18, id: 3}
      ],
      idForNextUser: 4,
      searchName: ''
    }
    this.myRef = React.createRef('');
  }

  deleteUserHandler = (id) => {
    const filteredUsersList = this.state.userList.filter(el => el.id !== id);
    this.setState({
    userList: filteredUsersList
  })
  }

  filterUsers = (item) => {
    return item.name.toLocaleLowerCase().includes(this.state.searchName.toLocaleLowerCase())
  }

  changeSearchNameHandler = (event) => {
    this.setState({
      searchName: event.target.value
    })
  } 

  render() {
    return(
      <Wrapper>
        <Card>
          <Inlinetext> search users  by name </Inlinetext>
          <Input onChange={this.changeSearchNameHandler} />
        </Card>
        <Card>
           <Card>
             <Inlinetext> user name </Inlinetext> <Input  />
           </Card>
           <Card>
             <Inlinetext> user surname </Inlinetext> <Input/>
           </Card>
           <Card>
             <Inlinetext> user age </Inlinetext> <Input/>
           </Card>
           
           <Button> add </Button>
        </Card>
       
        
        <List>
          {
            this.state.userList.filter(this.filterUsers).map(user => {
              return (
                <Listitem key={user.id}>
                   <Inlinetext> {user.name} </Inlinetext>
                   <Inlinetext> {user.surname} </Inlinetext>
                   <Inlinetext> {user.age} </Inlinetext>
                   <Button onClick={() => this.deleteUserHandler(user.id)}> Delete user form list </Button>
                </Listitem>
              )
            })
          }
        </List>
      </Wrapper>
    )
  }
  


}

export default App