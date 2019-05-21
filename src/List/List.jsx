import React from "react";
import './List.css'

const List = ({ cities, users, countrys, states }) => {

  return (
    <div className='div'>
      <h2 className='title'>Users</h2>
    <ul className='list'>
    
      {users.map(el => 
        <li className='item' key={el.createdAt}>
          <p>{el.name}</p>
          <p>{el.email}</p>
          <p>{el.phone_number}</p>
          <p >{countrys.map(ele=>ele.id===+el.country_id ? ele.name:'')},{states.map(ele=>ele.id===el.state_id ? ele.name:'')},{cities.map(ele=>ele.state_id===el.city_id ? ele.name:'')}</p>
          <p>{new Date(el.createdAt).toDateString()+''}</p>
        
        </li>
      )}
    </ul>
    </div>
  );
};

export default List;
