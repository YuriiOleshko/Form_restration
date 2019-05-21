import React, { Component } from "react";
import  './Form.css';

export default class Form extends Component {
  state = {
    name: "",
    country_id: "non-selected",
    email: "",
    state_id: "non-selected",
    city_id: "non-selected",
    phone_number: "",
    address: null,
    about_me:null
  };

  handelChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  handelSubmit=(e)=>{
    e.preventDefault();
    this.props.onSubmit(this.state)
  }

  render() {
    const { countrys, states, cities } = this.props;
    const { country_id,state_id } = this.state;
    return (
     
        <form className='form' onSubmit={this.handelSubmit}>
          <h2>Form regestration</h2>
          <input 
            className="input"
            type="text"
            name="name"
            id=""
            pattern="[^0-9]+$"
            onChange={this.handelChange}
            required
            placeholder='Enter your name'
          />
          <input   className="input" type="email" name="email" id="" onChange={this.handelChange}
          required   placeholder='Enter your email'/>
          <select
            className="input"
            name="country_id"
            id=""
           
            onChange={this.handelChange}
            required
          >
            <option value="">non-selected</option>
            {countrys.map(el => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          <select
            className="input"
           name="state_id" id="" hidden={country_id === "non-selected"} onChange={this.handelChange} required>
            <option value="">non-selected</option>
            {states.map(el => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          <select 
            className="input"
          name="city_id" id="" hidden={state_id === "non-selected"} onChange={this.handelChange} required>
            <option value="">non-selected</option>
            {cities.map(el => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          <input   className="input" type="number" name="phone_number" id="" onChange={this.handelChange} required   placeholder='Enter your phone'/>
          <input   className="input " type="text" name="address" id="" onChange={this.handelChange}  placeholder='Enter your adress'/>
          <textarea   className="input" name="about_me" id="" cols="30" rows="10" maxLength="500" onChange={this.handelChange} placeholder='tell us about yourself' />
          <input   className="input" type="submit" value="Submit" />
        </form>
   
    );
  }
}
