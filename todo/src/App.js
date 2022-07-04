import React, { Component } from "react";
import Button from "./components/Button/Button";
import Inlinetext from "./components/Inlinetext/Inlinetext";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import Listitem from "./components/Listitem/Listitem";
import Wrapper from "./ui/Wrapper/Wrapper";
import Card from "./ui/Card/Card";
import Center from "./ui/Center/Center";
import classes from './ui/Global.module.css';
import './App.css';

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
    this.newUserName = React.createRef('');
    this.newUserSurname = React.createRef('');
    this.newUserAge = React.createRef('');
  }


  changeSearchNameHandler = (event) => {
    this.setState({
      searchName: event.target.value
    })
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

  addNewUserHandler = () => {
    if(this.newUserName.current.value && this.newUserSurname.current.value && this.newUserAge.current.value) {
      const newUser = {
        name: this.newUserName.current.value,
        surname: this.newUserSurname.current.value,
        age: this.newUserAge.current.value,
        id: this.state.idForNextUser
      }
      this.setState({
         userList: this.state.userList.concat(newUser),
         idForNextUser: this.state.idForNextUser + 1
      })
    }
  }



  render() {
    return(
      <Wrapper>
        <Center className={classes.container}>
        <Card>
          <Inlinetext> search users  by name </Inlinetext>
          <Input onChange={this.changeSearchNameHandler} />
        </Card>
        <Card>
           <Card>
             <Inlinetext> user name </Inlinetext> <Input myPropsRef={this.newUserName} />
           </Card>
           <Card>
             <Inlinetext> user surname </Inlinetext> <Input myPropsRef={this.newUserSurname} />
           </Card>
           <Card>
             <Inlinetext> user age </Inlinetext> <Input type='number' myPropsRef={this.newUserAge} />
           </Card>
           
           <Button className={classes.button} onClick={this.addNewUserHandler}> add </Button>
        </Card>
       
        
        <List className={classes.list}>
          {
            this.state.userList.filter(this.filterUsers).map(user => {
              return (
                <Listitem className={classes.listitem} key={user.id}>
                   <Inlinetext>  {user.name} </Inlinetext>
                   <Inlinetext>  {user.surname} </Inlinetext>
                   <Inlinetext>  {user.age} </Inlinetext>
                   <Button className={classes.button} onClick={() => this.deleteUserHandler(user.id)}> Delete user form list </Button>
                </Listitem>
              )
            })
          }
        </List>
        </Center>
      </Wrapper>
    )
  }
  
}

export default App