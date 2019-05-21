import React, { Component } from "react";
import { getCountry, getCities, getStates,getUsers,setUsers } from "./Form/api";
import Form from './Form/Form.jsx';
import List from './List/List.jsx'
import './App.css'
export default class App extends Component {
  state = {
    countrys: [],
    cities: [],
    states:[],
    isLoding: true,
    card:{},
    users:[],
    update:false
  
  };

  componentDidMount() {
    getCountry().then(response => {
      this.setState({
        countrys: response.data,
      });
    })
    .catch(error => console.log(error));
    getCities()
      .then(response => {
        this.setState({
          cities: response.data,
          isLoding:false
        });
      })
      .catch(error => console.log(error));

      getUsers().then(response => {
        this.setState({
          users: response.data
        });
      })

      .catch(error => console.log(error));
      getStates().then(response => {
        this.setState({
          states: response.data
        });
      })
      .catch(error => console.log(error));


     
  }

  componentDidUpdate(preProps,prevState){
    if(prevState.update !==this.state.update){
      this.setState({
        isLoding:true
      });
      getUsers().then(response => {
        this.setState({
          users: response.data,
          isLoding:false,
          update:false
        });
      })
      .catch(error => console.log(error))
    }

  }
  submitForm=(obj)=>{
    setUsers(obj)
    this.setState({
      update:true
    })
   
  }
 
  render() {
    const {cities,countrys,states,isLoding,users}=this.state

    return <div className='App'> 
      {isLoding?<p>Loading ... </p>:<Form cities={cities} onSubmit={this.submitForm} countrys={countrys}  states={states} /> }
      {!users.length>0 ? <p>Loading ... </p>:<List cities={cities} users={users} countrys={countrys}  states={states}/>}
    </div>;
  }
}
